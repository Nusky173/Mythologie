import { TabsObject } from "../type";

const navBarInit: TabsObject[] = [
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

