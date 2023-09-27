import { getPostData } from '../../../lib/posts';
import styles from "./mythology.module.css"
import EncyclopediaCardContainer from '../../../component/encyclopediaCardContainer/encyclopediaCardContainer';
import { UnexistingFileError } from '../../../error/UnexistingFileError/unexistingFileError';

export default async function Mythology({
    params,
  }: {
    params: { mythology: string };
  }) {

    const {title, type, contentHtml } = await getPostData(params.mythology, params.mythology)
      .catch((error) => {
        throw new UnexistingFileError();
      })

    return (
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              {title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: contentHtml}} className={styles.paragraph}>
            </div>
          </div>
           <div className={styles.cardContainer}>
              <EncyclopediaCardContainer></EncyclopediaCardContainer>
           </div>
        </div>
    )
}