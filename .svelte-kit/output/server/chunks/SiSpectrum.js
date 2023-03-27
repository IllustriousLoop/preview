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
  )}><path d="${"M0 10.2A1.8 1.8 0 0 0 1.8 12h1.8a8.4 8.4 0 0 1 8.4 8.4v1.8a1.8 1.8 0 0 0 1.8 1.8h8.4a1.8 1.8 0 0 0 1.8-1.8v-1.8C24 9.133 14.867 0 3.6 0H1.8A1.8 1.8 0 0 0 0 1.8v8.4z"}"></path></svg>`;
});
export {
  Component as default
};
