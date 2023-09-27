import * as fs from "fs"
import path from "path"
import matter from "gray-matter"
import { BlogPost } from "../type";
import { remark } from 'remark'
import html from 'remark-html'
import { MythologyType } from "../enum";
import Error from "../app/error";
import { UnexistingFileError } from "../error/UnexistingFileError/unexistingFileError";

const postDirectoryRoot = path.join(process.cwd(), "blogposts")

/**
 * 
 * @param subDirectory a subdirectory of blogposts 
 * @returns return all the md files on that subdirectory
 */
function getPostOfSubDirectory(subDirectory: string) {
    const explicitDirectoryName = postDirectoryRoot + "/" + subDirectory;

    try {

        const fileNames = fs.readdirSync(explicitDirectoryName);

        const allPostData = fileNames.map( fileName => {
            const id = fileName.replace(/\.md$/, '');

            const fullPath = path.join(explicitDirectoryName, fileName);
            const fileContents = fs.readFileSync(fullPath, { encoding: 'utf8'});
            
            const matterResult = matter(fileContents);

            const blogPost: BlogPost = {
                id, 
                title: matterResult.data.title,
                type: matterResult.data.type,
                attrait: matterResult.data.type,
            }

            return blogPost;

        })

        if(allPostData.length === 0) {
            return new UnexistingFileError();
        }

        return allPostData;
    } catch (e) {
        throw new UnexistingFileError();
    }
}

/**
 * 
 * @param subDirectory ex: egypt
 * @param id personnality ex: zeus
 * @returns will return the md of zeus and all the information about it
 */

export function getPostById(subDirectory: string, id: string) {
    if(id === MythologyType.GOD || MythologyType.HEROES) return;

    const explicitDirectoryName = postDirectoryRoot + "/" + subDirectory;

    const fileNames = fs.readdirSync(explicitDirectoryName);

    const post = fileNames.find( fileName => {
        return fileName.replace(/\.md$/, '') === id;
    })

    return post;
}

/**
 * 
 * @param subDirectory a directory
 * @param type a type of Mythology.GOD / HEROES 
 * @returns return all md files that match the type
 */
export function getAllPostByTypeForSubDir(subDirectory: string, type: string) {

    let result = [];

    try {

        const allPostData = getPostOfSubDirectory(subDirectory);

        if(allPostData instanceof UnexistingFileError) {
            return;
        }


        result = allPostData.filter(e => {
            if(e.type !== undefined) {
                return e.type.toLowerCase() === type.toLowerCase();
            }
        })

        return result;
    } catch (e) {
        throw new UnexistingFileError();
    }
}

/**
 * 
 * @param subDirectory a directory
 * @param id an id ex: greek
 * @returns return md file of the id.
 */
export async function getPostData(subDirectory: string, id: string) {
    const explicitDirectoryName = postDirectoryRoot + "/" + subDirectory;

    try {
        const fullPath = path.join(explicitDirectoryName, `${id}.md`);

        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);

        const contentHtml = processedContent.toString();

        // Combine the data with the id
        const blogPostWithHTML: BlogPost & { contentHtml: string } = {
            id,
            title: matterResult.data.title,
            type: matterResult.data.type,
            attrait: matterResult.data.attrait,
            contentHtml,
        }

        return blogPostWithHTML
    } catch (e) {
        throw new UnexistingFileError()
    }    
}