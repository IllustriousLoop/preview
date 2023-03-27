import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M247 65.16 32.34 440.8l61.79-35.7L247 137.6zm18 .38V137l158.3 271.3 62.7 36.1C412.2 318.2 338.6 191.8 265 65.54zM415.4 424.5l-321.3 1.4-62.72 36.2 445.82-1.9z"}"></path></svg>`;
});
export {
  Component as default
};
