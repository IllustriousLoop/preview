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
  )}><path d="${"M396.795 396.8H320V448h128V320h-51.205zm.005-281.595V192H448V64H320v51.205zm-281.595-.005H192V64H64v128h51.205zm-.005 281.595V320H64v128h128v-51.205z"}"></path></svg>`;
});
export {
  Component as default
};
