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
  )}><path d="${"M13 6h-2v1a1 1 0 1 0 2 0V6Z"}"></path><path fill-rule="${"evenodd"}" d="${"M6 2v2h1v3a5 5 0 0 0 5 5 5 5 0 0 0-5 5v3H6v2h12v-2h-1v-3a5 5 0 0 0-5-5 5 5 0 0 0 5-5V4h1V2H6Zm3 2h6v3a3 3 0 1 1-6 0V4Zm0 13v3h6v-3a3 3 0 1 0-6 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
