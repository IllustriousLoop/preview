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
  )}><path d="${"M14 8h-2.5L8 11.5 4.5 8H2l-2 4v1h16v-1l-2-4zM0 14h16v1H0v-1zm9-9V1H7v4H3.5L8 9.5 12.5 5H9z"}"></path></svg>`;
});
export {
  Component as default
};
