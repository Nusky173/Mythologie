'use client'

import { useState } from "react";
import { tabsObject } from "../../type";
import { usePathname } from "next/navigation";
import EncyclopediaCard from "../../component/encyclopediaCard/encyclopediaCard";
import styles from "./encyclopedia.module.css";



export default function Encyclopedia({
    params,
  }: {
    params: { encyclopedia: string };
  }) {

  const encyclopedia = params.encyclopedia;
  
  const navBarInit: tabsObject[] = [
    {id: "greek", name: "Grecque", route: "greek", subTabs: [
      {id: "god", name: "Dieux", route: "greek/god", subTabs: []},
      {id: "halfgod", name: "Demi-dieux", route: "greek/halfgod", subTabs: []},
      {id: "heroes", name: "Héros", route: "greek/heroes", subTabs: []},
    ]},
    {id: "roman", name: "Romaine", route: "roman", subTabs: [
      {id: "god", name: "Dieux", route: "roman/god", subTabs: []},
      {id: "halfgod", name: "Demi-dieux", route: "roman/halfgod", subTabs: []},
      {id: "heroes", name: "Héros", route: "roman/heroes", subTabs: []},
    ]},
  ];
  
  return (
      <div className={styles.container}>
        {navBarInit !== undefined &&
          navBarInit.map((item, key) => {
            return (
              <EncyclopediaCard key={key} name={item.name}></EncyclopediaCard>
            )})
          }
          
      </div>
  )
}