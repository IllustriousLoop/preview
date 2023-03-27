import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M19 5H7V3h14v14h-2V5ZM9 13v-2h2v2h2v2h-2v2H9v-2H7v-2h2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M3 7h14v14H3V7Zm2 2h10v10H5V9Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
