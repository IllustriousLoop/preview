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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16zm-9 2H5v5.999h2V9l3 3-3 3v-2H5v6h6v-2h2v2h6v-6h-2v2l-3-3 3-3v1.999h2V5h-6v2h-2V5zm2 8v2h-2v-2h2zm0-4v2h-2V9h2z"}"></path></svg>`;
});
export {
  Component as default
};
