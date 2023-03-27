import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"m2.5 1-.5.5V13h1V2h11v11h1V1.5l-.5-.5h-12zM2 15v-1h1v1H2zm3-1H4v1h1v-1zm1 0h1v1H6v-1zm3 0H8v1h1v-1zm1 0h1v1h-1v-1zm5 1v-1h-1v1h1zm-3-1h1v1h-1v-1z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
