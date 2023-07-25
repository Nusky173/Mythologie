import { usePathname } from "next/navigation";
import { Mythology, MythologyType } from "../enum";
import { TabsObject } from "../type";
import { useRouter } from "next/router";

export const navBarInit: TabsObject[] = [
    {id: Mythology.GREEK, name: "Grecque", route: "mythology/greek", subTabs: [
      {id: MythologyType.GOD, name: "Dieux", route: "mythology/greek/god", subTabs: []},
      {id: MythologyType.HALFGOD, name: "Demi-dieux", route: "mythology/greek/halfgod", subTabs: []},
      {id: MythologyType.HEROES, name: "Héros", route: "mythology/greek/heroes", subTabs: []},
    ]},
    {id: Mythology.ROMAN, name: "Romaine", route: "mythology/roman", subTabs: [
      {id: MythologyType.GOD, name: "Dieux", route: "mythology/roman/god", subTabs: []},
      {id: MythologyType.HALFGOD, name: "Demi-dieux", route: "mythology/roman/halfgod", subTabs: []},
      {id: MythologyType.HEROES, name: "Héros", route: "mythology/roman/heroes", subTabs: []},
    ]},
  ];

/**
* set locationText = current position of user 
* to display on page
*/
export const getLocationChildren = (route: string) : TabsObject[] => {

    const locationArray = route.split("/");
    const locationVar = route.replace("/", "");

    if(route === "/") {
        return [];
    }

    if(route === "/mythology") {
        return navBarInit;
    }
        
    //currentLocation is on first level of NavTree
    const res = navBarInit.find((e) => { 
        return e.route == locationVar;
    })

    if(res !== undefined ) {
        return res.subTabs || [];
    }

    //need to find currentLocation recursively
    else {
        const result = setLocationTextRec(locationArray, navBarInit, 1);
        return result;
    }

}

/**
     * 
     * @param array Array of string represent pathname split by "/"
     * @param recursiveArray navBarInit to find current posisiton and save name on navigation
     * @param depth depth of navBarInit
     * @returns the clear name of current Location
     */
const setLocationTextRec = (array: string[], recursiveArray: TabsObject[], depth: number) : TabsObject[] => {
    let result: TabsObject[] = [];
    let i = 0;

    while(i < recursiveArray.length) {

        if(array[depth] !== recursiveArray[i].id) {
            i++;
        }

        else {
            if(recursiveArray[i].subTabs?.length === 0 ) {
                result = [recursiveArray[i]] 
            }
            else {
                result = setLocationTextRec(array, recursiveArray[i].subTabs!, depth + 1);
            }
            i++;
        }
    }

    return result;
}