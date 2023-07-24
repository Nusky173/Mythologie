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
    {id: "greek", name: "Grecque", route: "mythology/greek", subTabs: [
      {id: "god", name: "Dieux", route: "mythology/greek/god", subTabs: []},
      {id: "halfgod", name: "Demi-dieux", route: "mythology/greek/halfgod", subTabs: []},
      {id: "heroes", name: "Héros", route: "greek/heroes", subTabs: []},
    ]},
    {id: "roman", name: "Romaine", route: "mythology/roman", subTabs: [
      {id: "god", name: "Dieux", route: "mythology/roman/god", subTabs: []},
      {id: "halfgod", name: "Demi-dieux", route: "mythology/roman/halfgod", subTabs: []},
      {id: "heroes", name: "Héros", route: "mythology/roman/heroes", subTabs: []},
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