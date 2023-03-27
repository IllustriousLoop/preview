import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M16.641 5.409 13.83 2H9V0H8v2H1v7h7v8h1V9h4.838l2.803-3.591zM9 8H2V3h11.358l2.001 2.426L13.35 8H9z"}"></path></svg>`;
});
export {
  Component as default
};
