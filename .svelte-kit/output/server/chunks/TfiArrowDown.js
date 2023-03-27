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
  )}><path d="${"M15.854 8.854 8.5 16.207 1.146 8.854l.707-.707L8 14.293V1h1v13.293l6.146-6.146.708.707z"}"></path></svg>`;
});
export {
  Component as default
};
