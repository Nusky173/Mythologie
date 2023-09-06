import styles from "./encyclopedia.module.css";
import EncyclopediaCardContainer from "../../component/encyclopediaCardContainer/encyclopediaCardContainer";
import Loading from "./loading";
import { Suspense } from "react";

export default async function Encyclopedia({
    props,
  }: {
    props: {children: React.ReactNode, encyclopedia: string 
};
  }) {
  
  return (
      <div className={styles.container}>
        <EncyclopediaCardContainer></EncyclopediaCardContainer>
      </div>
  )
}