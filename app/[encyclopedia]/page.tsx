'use client'

import { TabsObject } from "../../type";
import EncyclopediaCard from "../../component/encyclopediaCard/encyclopediaCard";
import styles from "./encyclopedia.module.css";
import { MythologyType } from "../../enum";



export default function Encyclopedia({
    params,
  }: {
    params: { encyclopedia: string };
  }) {

  const encyclopedia = params.encyclopedia;
  
  const navBarInit: TabsObject[] = [
    {id: "greek", name: "Grecque", route: "mythology/greek", subTabs: [
      {id: MythologyType.GOD, name: "Dieux", route: "mythology/greek/god", subTabs: []},
      {id: MythologyType.HALFGOD, name: "Demi-dieux", route: "mythology/greek/halfgod", subTabs: []},
      {id: MythologyType.HEROES, name: "Héros", route: "mythology/greek/heroes", subTabs: []},
    ]},
    {id: "roman", name: "Romaine", route: "mythology/roman", subTabs: [
      {id: MythologyType.GOD, name: "Dieux", route: "mythology/roman/god", subTabs: []},
      {id: MythologyType.HALFGOD, name: "Demi-dieux", route: "mythology/roman/halfgod", subTabs: []},
      {id: MythologyType.HEROES, name: "Héros", route: "mythology/roman/heroes", subTabs: []},
    ]},
  ];
  
  return (
      <div className={styles.container}>
        {navBarInit !== undefined &&
          navBarInit.map((item, key) => {
            return (
              <EncyclopediaCard key={key} item={item}></EncyclopediaCard>
            )})
          }
          
      </div>
  )
}