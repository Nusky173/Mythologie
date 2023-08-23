import { getPostData } from '../../../lib/posts';
import styles from "./mythology.module.css"
import EncyclopediaCardContainer from '../../../component/encyclopediaCardContainer/encyclopediaCardContainer';

export default async function Mythology({
    params,
  }: {
    params: { mythology: string };
  }) {

    const {title, type, contentHtml } = await getPostData(params.mythology, params.mythology)

    return (
        <div className={styles.container}>
           <h1 className={styles.title}>
             {title}
           </h1>
          <div dangerouslySetInnerHTML={{ __html: contentHtml}} className={styles.paragraph}>
          </div>
           <div>
              <EncyclopediaCardContainer></EncyclopediaCardContainer>
           </div>
        </div>
    )
}