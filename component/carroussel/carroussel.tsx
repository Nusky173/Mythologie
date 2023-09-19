"use client"

import Image from "next/image";
import styles from "./carroussel.module.css"
import { useEffect, useState } from "react";

const Carroussel = () => {

    const imgTab = [
        "../../public/38830.PNG",
        "../../public/40169.PNG",
        "../../public/eye-udjat-EG.PNG"     
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    let newIndex = 0;

    const updateIndex = () => {
        if(activeIndex +1 < imgTab.length) {
            newIndex++
        } else {
            newIndex = 0
        }

        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex()
            console.log(activeIndex)
        }, 3000);

        return () => {
            if(interval) {  
                clearInterval(interval)
            }
        }
    });

    return (
        <div className={styles.carroussel} >
        <div className={styles.inner} style={{transform: `translateX(-${activeIndex * 100}%)`}}>
            {imgTab.length > 0 && 
                imgTab.map((e, index ) => {
                    let className = 'img' + index
                    return (
                        <div className={`${styles[className]} ${styles.carroussel_item}`} key={index} style={{width: "100%"}}></div>
                    );
                })
            }
        </div>
        </div>
    );
}

export default Carroussel;