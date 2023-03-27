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
  )}><path d="${"M8.5.5a8.001 8.001 0 0 0 0 16 8 8 0 0 0 0-16zM5.433 10.979a2.518 2.518 0 1 1-.002-5.036 2.518 2.518 0 0 1 .002 5.036zm6.317 0a2.517 2.517 0 1 1 0-5.036 2.518 2.518 0 1 1 0 5.036z"}"></path></svg>`;
});
export {
  Component as default
};
