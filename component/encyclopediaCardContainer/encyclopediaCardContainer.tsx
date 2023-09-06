"use client"

import { usePathname } from "next/navigation";
import { getLocationChildren } from "../../lib/navigation";
import EncyclopediaCard from "../encyclopediaCard/encyclopediaCard";
import styles from "./encyclopediaCardContainer.module.css"
import { BlogPost, TabsObject } from "../../type";

type EncyclopediaCardContainerProperty = {
    listItems?: BlogPost[]
}

const EncyclopediaCardContainer = (property: EncyclopediaCardContainerProperty) => {

    const pathname = usePathname() || "/";

    const listItems = getLocationChildren(pathname);
    
    const propsListItem = property.listItems;

    return (
        <div className={styles.container}>
            {propsListItem !== undefined && 

                propsListItem.map((item,key) => {
                    const newTabsObject: TabsObject = {
                        id: item.id,
                        name: item.title,
                        route: pathname + "/" + item.id
                    }
                    return (
                        <div className={styles.leafChild} key={key}>
                            <span className={styles.one}></span>
                                <span className={styles.two}></span>
                                <span className={styles.three}></span>
                                <span className={styles.four}></span>
                                <span className={styles.five}></span>
                                <span className={styles.six}></span>
                                <span className={styles.seven}></span>
                                <span className={styles.eight}></span>
                            <EncyclopediaCard  item={newTabsObject}>
                                
                            </EncyclopediaCard>
                        </div>
                    )
                })
            }
            {propsListItem === undefined && listItems !== undefined &&
                    listItems.map((item,key) => {
                        return (
                            <div className={styles.nodeChild} key={key}>
                                <span className={styles.one}></span>
                                <span className={styles.two}></span>
                                <span className={styles.three}></span>
                                <span className={styles.four}></span>
                                <span className={styles.five}></span>
                                <span className={styles.six}></span>
                                <span className={styles.seven}></span>
                                <span className={styles.eight}></span>
                                <EncyclopediaCard item={item}>
                                    
                                </EncyclopediaCard>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default EncyclopediaCardContainer;