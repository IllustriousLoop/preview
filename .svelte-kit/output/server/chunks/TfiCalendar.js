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
  )}><path d="${"M14 2V1h-3v1H6V1H3v1H0v15h17V2h-3zm-2 0h1v2h-1V2zM4 2h1v2H4V2zm12 14H1V7.079h15V16zM1 6.079V3h2v2h3V3h5v2h3V3h2v3.079H1z"}"></path></svg>`;
});
export {
  Component as default
};
