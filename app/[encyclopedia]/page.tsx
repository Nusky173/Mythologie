import styles from "./encyclopedia.module.css";
import EncyclopediaCardContainer from "../../component/encyclopediaCardContainer/encyclopediaCardContainer";

export default function Encyclopedia({
    params,
  }: {
    params: { encyclopedia: string };
  }) {
  
  return (
      <div className={styles.container}>
        {/* {navBarInit !== undefined &&
          navBarInit.map((item, key) => {
            return (
              <EncyclopediaCard key={key} item={item}></EncyclopediaCard>
            )})
          } */}
        <EncyclopediaCardContainer></EncyclopediaCardContainer>
      </div>
  )
}