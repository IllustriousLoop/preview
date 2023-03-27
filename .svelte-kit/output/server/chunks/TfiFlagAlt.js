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
  )}><path d="${"M15 0v17h-1V0h1zM1.527.976H13v8H1.51l2.911-3.952L1.527.976zm10.473 1H3.472l2.185 3.056-2.168 2.944H12v-6z"}"></path></svg>`;
});
export {
  Component as default
};
