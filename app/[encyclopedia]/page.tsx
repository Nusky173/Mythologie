import styles from "./encyclopedia.module.css";
import EncyclopediaCardContainer from "../../component/encyclopediaCardContainer/encyclopediaCardContainer";
import Loading from "./loading";
import { Suspense } from "react";

export default function Encyclopedia({
    props,
  }: {
    props: { encyclopedia: string 
};
  }) {
  
  return (
      <div className={styles.container}>
        <EncyclopediaCardContainer></EncyclopediaCardContainer>
      </div>
  )
}