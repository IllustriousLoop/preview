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
  )}><path d="${"M2 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 2 6zm0 3a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm6.5-3a2 2 0 1 0 .001 4.001A2 2 0 0 0 8.5 6zm0 3a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zM15 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 15 6zm0 3a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z"}"></path></svg>`;
});
export {
  Component as default
};
