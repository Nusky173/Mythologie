import * as fs from "fs"
import path from "path"
import matter from "gray-matter"
import { BlogPost } from "../type";
import { remark } from 'remark'
import html from 'remark-html'
import { MythologyType } from "../enum";

const postDirectoryRoot = path.join(process.cwd(), "blogposts")

export function getPostOfSubDirectory(subDirectory: string) {
    const explicitDirectoryName = postDirectoryRoot + "/" + subDirectory;

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

    return allPostData;
}

export function getPostById(subDirectory: string, id: string) {
    if(id === MythologyType.GOD || MythologyType.HEROES) return;

    const explicitDirectoryName = postDirectoryRoot + "/" + subDirectory;

    const fileNames = fs.readdirSync(explicitDirectoryName);

    const post = fileNames.find( fileName => {
        return fileName.replace(/\.md$/, '') === id;
    })

    return post;
}

export function getAllPostByTypeForSubDir(subDirectory: string, type: string) {

    let result = [];

    const allPostData = getPostOfSubDirectory(subDirectory);


    result = allPostData.filter(e => {
        if(e.type !== undefined) {
            return e.type.toLowerCase() === type.toLowerCase();
        }
    })

    return result;

}

export async function getPostData(subDirectory: string, id: string) {
    const explicitDirectoryName = postDirectoryRoot + "/" + subDirectory;

    const fullPath = path.join(explicitDirectoryName, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const blogPostWithHTML: BlogPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        type: matterResult.data.type,
        attrait: matterResult.data.attrait,
        contentHtml,
    }

    // Combine the data with the id
    return blogPostWithHTML
}