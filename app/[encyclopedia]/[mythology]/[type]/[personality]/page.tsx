import { getPostData } from "../../../../../lib/posts";
import styles from "./personality.module.css";

export default async function Personality({
    params,
  }: {
    params: { mythology: string, type: string, personality: string };
  }) {

    const {title, type, attrait, contentHtml } = await getPostData(params.mythology, params.personality)

    const separateAttrait = (attrait: string) => {
      const tab = attrait.split('-');
      
      return tab
    }

    const tabAttrait = separateAttrait(attrait);
    

    return (
      <div className={styles.container}>
        <div className={styles.side}>
         <h1 className={styles.title}>
           {title}
         </h1>
         <h4 className={styles.informations}>
           {tabAttrait.length > 0 && 
            tabAttrait.map((e, key) => {
              return (
                  <div className={styles.attrait} key={key}> {e} </div> 
                );
            })
            }
         </h4>
         </div>
         <article className={styles.text}>
          <div dangerouslySetInnerHTML={{ __html: contentHtml}}></div>
         </article>
      </div>
  )
}