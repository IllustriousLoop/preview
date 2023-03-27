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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16zm-2-9V5h-5.999v2H15l-3 3-3-3h2V5H5v6h2v2H5v6h6v-2H9l3-3 3 3h-1.999v2H19v-6h-2v-2h2zm-8 2H9v-2h2v2zm4 0h-2v-2h2v2z"}"></path></svg>`;
});
export {
  Component as default
};
