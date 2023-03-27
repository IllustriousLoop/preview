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
  )}><path d="${"M121 17v30h270V17H121zm16 48v46h30V65h-30zm208 0v46h30V65h-30zm-224 64v30h270v-30H121zm16 48v46h30v-46h-30zm208 0v46h30v-46h-30zm-224 64v30h270v-30H121zm16 48v46h30v-46h-30zm208 0v46h30v-46h-30zm-224 64v30h270v-30H121zm16 48v46h30v-46h-30zm208 0v46h30v-46h-30zm-224 64v30h270v-30H121z"}"></path></svg>`;
});
export {
  Component as default
};
