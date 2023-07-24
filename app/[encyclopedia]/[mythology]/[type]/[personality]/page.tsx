import { getPostData } from "../../../../../lib/posts";

export default async function Personality({
    params,
  }: {
    params: { mythology: string, type: string, personality: string };
  }) {

    const {title, type, contentHtml } = await getPostData(params.mythology, params.personality)

    return (
      <div>
         <h1>
           {title}
         </h1>
         <h3>
           {type}
         </h3>
         <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml}}></section>
         </article>
      </div>
  )
}