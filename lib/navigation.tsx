import { usePathname } from "next/navigation";
import { Mythology, MythologyType } from "../enum";
import { TabsObject } from "../type";
import { useRouter } from "next/router";
import { UnexistingFileError } from "../error/UnexistingFileError/unexistingFileError";

export const navBarInit: TabsObject[] = [
    {id: Mythology.GREEK, name: "Grecque", route: "mythology/greek", subTabs: [
      {id: MythologyType.GOD, name: "Dieux", route: "mythology/greek/god", subTabs: []},
    //   {id: MythologyType.HEROES, name: "Héros", route: "mythology/greek/heroes", subTabs: []},
    ]},
    {id: Mythology.EGYPT, name: "Egyptienne", route: "mythology/egypt", subTabs: [
      {id: MythologyType.GOD, name: "Dieux", route: "mythology/egypt/god", subTabs: []},
    ]},
    {id: Mythology.NORDIC, name: "Nordique", route: "mythology/nordic", subTabs: [
      {id: MythologyType.GOD, name: "Dieux", route: "mythology/nordic/god", subTabs: []},
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
        const result = setLocationTextRec(locationArray, navBarInit, 2);
        if(result.length === 0 ) {
            throw new UnexistingFileError();
        }
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