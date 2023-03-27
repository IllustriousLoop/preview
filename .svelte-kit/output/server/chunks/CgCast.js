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
  )}><path d="${"M20 6H4v2H2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5v-2h5V6ZM2 13a7 7 0 0 1 7 7H7a5 5 0 0 0-5-5v-2Zm0 4a3 3 0 0 1 3 3H2v-3Z"}"></path><path d="${"M2 9c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9V9Z"}"></path></svg>`;
});
export {
  Component as default
};
