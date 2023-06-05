import { swatch, fileIcon, ai, logoTShirt, stylishTShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  }
];

export const FilterTabs = [
  {
    name: "logoTShirt",
    icon: logoTShirt,
  },
  {
    name: "stylishTShirt",
    icon: stylishTShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoTShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishTShirt",
  },
};
