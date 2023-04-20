export type tabsObject = {
    name: string;
    subTabs?: tabsObject[];
    id: string;
    route: string;
}

export type BlogPost = {
    id: string;
    title: string;
    type: string;
}

