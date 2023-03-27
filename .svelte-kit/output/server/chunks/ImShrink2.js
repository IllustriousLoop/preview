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
  )}><path d="${"M7 9v6.5L4.5 13l-3 3L0 14.5l3-3L.5 9zm9-7.5-3 3L15.5 7H9V.5L11.5 3l3-3z"}"></path></svg>`;
});
export {
  Component as default
};
