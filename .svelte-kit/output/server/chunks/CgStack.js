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
  )}><path d="${"M20 4v12h2V2H8v2h12Z"}"></path><path fill-rule="${"evenodd"}" d="${"M2 8v14h14V8H2Zm12 2H4v10h10V10Z"}" clip-rule="${"evenodd"}"></path><path d="${"M17 7H5V5h14v14h-2V7Z"}"></path></svg>`;
});
export {
  Component as default
};
