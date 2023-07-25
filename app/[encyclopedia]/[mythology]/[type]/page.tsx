import EncyclopediaCardContainer from '../../../../component/encyclopediaCardContainer/encyclopediaCardContainer';
import { getAllPostByTypeForSubDir } from '../../../../lib/posts';
import styles from "./type.module.css"

export default function Type({
    params,
  }: {
    params: { mythology: string, type: string };
  }) {

    const articlesCard = getAllPostByTypeForSubDir(params.mythology, params.type)

    return (
        <div className={styles.container}>
            <EncyclopediaCardContainer listItems={articlesCard}></EncyclopediaCardContainer>
        </div>
    )
}