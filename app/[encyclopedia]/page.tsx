import styles from "./encyclopedia.module.css";
import EncyclopediaCardContainer from "../../component/encyclopediaCardContainer/encyclopediaCardContainer";

export default function Encyclopedia({
    params,
  }: {
    params: { encyclopedia: string };
  }) {
  
  return (
      <div className={styles.container}>
        <EncyclopediaCardContainer></EncyclopediaCardContainer>
      </div>
  )
}