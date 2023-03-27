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
  )}><path d="${"M8.354 3.646 13.207 8.5l-4.854 4.854-.707-.707L11.293 9H0V8h11.292L7.646 4.354l.708-.708zM16 0v17h1V0h-1z"}"></path></svg>`;
});
export {
  Component as default
};
