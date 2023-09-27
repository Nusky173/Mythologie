import styles from "./encyclopedia.module.css";
import EncyclopediaCardContainer from "../../component/encyclopediaCardContainer/encyclopediaCardContainer";

export default function Encyclopedia() {
  
  return (
      <div className={styles.container}>
        <EncyclopediaCardContainer></EncyclopediaCardContainer>
      </div>
  )
}