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
  )}><path d="${"M4 8a2 2 0 1 1-4.001-.001A2 2 0 0 1 4 8zm4.5-2a2 2 0 1 0 .001 4.001A2 2 0 0 0 8.5 6zM15 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 15 6z"}"></path></svg>`;
});
export {
  Component as default
};
