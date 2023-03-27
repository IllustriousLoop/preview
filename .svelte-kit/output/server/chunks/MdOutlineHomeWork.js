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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M17 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-3.26 0 1.26.84V7z"}"></path><path d="${"M10 3v1.51l2 1.33V5h9v14h-4v2h6V3z"}"></path><path d="${"M8.17 5.7 15 10.25V21H1V10.48L8.17 5.7zM10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4v6z"}"></path></svg>`;
});
export {
  Component as default
};
