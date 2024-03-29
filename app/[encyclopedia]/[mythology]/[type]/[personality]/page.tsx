import { getPostData } from "../../../../../lib/posts";
import styles from "./personality.module.css";

export default async function Personality({
    params,
  }: {
    params: { mythology: string, type: string, personality: string };
  }) {

    const {title, type, attrait, contentHtml } = await getPostData(params.mythology, params.personality)

    const separateAttrait = (attrait: string) => {
      if(!attrait) {
        return []
      }
      
      const tab = attrait.split('-');
      return tab
    }

    const tabAttrait = separateAttrait(attrait);

    const text = () => {
      if(contentHtml.length > 0 ) {
        return contentHtml;
      } 

      return "Page en construction";
    }

    const textHTML = text();    

    return (
      <div className={styles.container}>
        <div className={styles.side}>
          <div className={styles.informations}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <h4 className={styles.attract}>
            {tabAttrait.length > 0 && 
              tabAttrait.map((e, key) => {
                return (
                    <div className={styles.attrait} key={key}> {e} </div> 
                  );
              })
              }
          </h4>
          </div>
        </div>
        <div className={styles.text_container}>
          <article className={styles.text}>
            <div dangerouslySetInnerHTML={{ __html: textHTML}}></div>
          </article>
        </div>
      </div>
  )
}