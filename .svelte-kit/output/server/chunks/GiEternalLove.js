import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M372.48 31.215c-77.65 0-116.48 65.73-116.48 65.73s-38.83-65.72-116.48-65.72c-37.14 0-107.77 33.72-107.77 125.13 0 161.24 224.25 324.43 224.25 324.43s224.25-163.19 224.25-324.43c0-91.42-70.63-125.13-107.77-125.14zM160 129h192v18H160v-18zm23 31h18v176h-18V160zm33 0h80s-8 80-40 80-40-80-40-80zm95 0h18v176h-18V160zm-55 96c32 0 40 80 40 80h-80s8-80 40-80zm-96 93h192v18H160v-18z"}"></path></svg>`;
});
export {
  Component as default
};
