import { getPostData } from '../../../lib/posts';
import styles from "./mythology.module.css"

export default async function Mythology({
    params,
  }: {
    params: { mythology: string };
  }) {

    const {title, type, contentHtml } = await getPostData(params.mythology, params.mythology)

    return (
        <div>
           <h1>
             {title}
           </h1>
           <h3>
             {type}
           </h3>
           <article>
            <section dangerouslySetInnerHTML={{ __html: contentHtml}}>
            </section>
           </article>
           <div className={styles.container}>

           </div>
        </div>
    )
}