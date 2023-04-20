'use client'

import { tabsObject } from "../../type";
import styles from "./sidebar.module.css"
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

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

let currentNavBar : tabsObject[] = navBarInit;
let navBarBuffer: tabsObject | undefined;

const SideBar = () => { 
    const [locationText, setLocationText] = useState("");
    const location = useRouter();
    const pathname = usePathname() || "/";

    /**
     * set locationText = current position of user 
     * to display on page
     */
    const setLocationElement = () => {
        const locationArray = pathname.split("/");
        const locationVar = pathname.replace("/", "");

        if(pathname === "/") {
            return;
        }
        
        //currentLocation is on first level of NavTree
        const res = navBarInit.find((e) => { 
            return e.route == locationVar;
        })

        if(res !== undefined ) {
            setLocationText(res.name);
            return;
        }

        //need to find currentLocation recursively
        else {
            const text = setLocationTextRec(locationArray, navBarInit, 1).replaceAll(" ", " / ");
            setLocationText(text);
        }
    }

    /**
     * 
     * @param array Array of string represent pathname split by "/"
     * @param recursiveArray navBarInit to find current posisiton and save name on navigation
     * @param depth depth of navBarInit
     * @returns the clear name of current Location
     */
    const setLocationTextRec = (array: string[], recursiveArray: tabsObject[], depth: number) : string => {
        let result = '';
        let i = 0;

        while(i < recursiveArray.length) {

            if(array[depth] !== recursiveArray[i].id) {
                i++;
            }

            else {
                if(recursiveArray[i].subTabs?.length === 0 ) {
                    result = recursiveArray[i].name 
                }
                else {
                    result = recursiveArray[i].name + " " + setLocationTextRec(array, recursiveArray[i].subTabs!, depth + 1);
                }
                i++;
            }
        }

        return result;
    }

    /**
     * 
     * @param array Array of string represent pathname split by "/"
     * @param recursiveArray navBarInit to find current posisiton and save name on navigation
     * @param depth depth of navBarInit
     * @returns current tabs object depend on location
     */
    const findCurrentTabsObjectRec = (array: string[], recursiveArray: tabsObject[], depth: number) : tabsObject => {
        let result: tabsObject;
        let i = 0;
        
        while(i < recursiveArray.length) {

            if(recursiveArray[i].route === pathname.replace("/", "")){
                return recursiveArray[i];
            }

            if(array[depth] !== recursiveArray[i].id) {
                i++;
            }

            else {
                result = findCurrentTabsObjectRec(array, recursiveArray[i].subTabs!, depth + 1);
                i++;
            }
        }

        return result;
    }


    /**
     * Set navBarBuffer = parent tabsObject of navBarInit current tabsObject location
     * to retrieve the sibling of current tabsObject location.
     */
    const setBufferNavBar = () => {
        const bufferArray = pathname.split("/");
        let parentRoute = "";

        bufferArray.forEach((e, i) => {
            if(i < bufferArray.length -1) {
                parentRoute =  parentRoute + e;
            }
        })

        navBarBuffer = navBarInit.find((e) => {
            if(e.route === parentRoute) {
                return e;
            }
        });
    }

    /**
     * 
     */
    const setNavBarItems = () => {

        if(pathname === "/") {
            setLocationText("");
            currentNavBar = navBarInit;
        }

        else {
            /**
             * Need to find currentTabsObject recursively
             */

            const locationArray = pathname.split("/");
            const currentTabsObject = findCurrentTabsObjectRec(locationArray, navBarInit, 1 );

            if(currentTabsObject?.subTabs!.length <= 0) {
                setBufferNavBar();
                currentNavBar = navBarBuffer!.subTabs!.filter((e: tabsObject) => {
                    return e.id !== currentTabsObject?.id
                });
            } else {
                currentNavBar = currentTabsObject?.subTabs!
            }       
        }
    }

    useEffect(() => {
        setLocationElement();
        setNavBarItems();
    }, [pathname])

    useEffect(() => {

    }, [currentNavBar])

    return (
        <div className={styles.sidebarcontent}> 
            {pathname !== "/" && <div className={styles.location}> {locationText} </div>}
                <nav className={styles.navbar}>
                    {currentNavBar !== undefined && 
                        currentNavBar.map((item, key) => {
                            return (
                            <div className={styles.chip} key={key}>
                                <Link href={item.route} onMouseDown={() => { setLocationElement()}}>
                                    <button className={styles.button}>
                                        {item.name}
                                    </button>
                                </Link>
                            </div>
                        )})
                    }
                </nav>
        </div>
    );
}

export default SideBar;
