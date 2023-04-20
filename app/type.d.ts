export type tabsObject = {
    name: string;
    subTabs?: tabsObject[];
    id: string;
    route: string;
}