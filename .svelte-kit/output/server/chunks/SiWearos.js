import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8.416 21.135a2.53 2.53 0 0 1-2.313-1.502L.219 6.42a2.53 2.53 0 0 1 4.623-2.06l5.883 13.213a2.53 2.53 0 0 1-1.282 3.341 2.525 2.525 0 0 1-1.027.22zm7.195.036a2.327 2.327 0 0 1-2.127-1.381L7.39 6.102a2.327 2.327 0 0 1 4.251-1.894l6.094 13.69a2.327 2.327 0 0 1-1.178 3.072 2.311 2.311 0 0 1-.946.201zM24 5.195a2.327 2.327 0 0 1-2.327 2.327 2.327 2.327 0 0 1-2.327-2.327 2.327 2.327 0 0 1 2.327-2.327A2.327 2.327 0 0 1 24 5.195zm-2.612 5.116a2.49 2.49 0 0 1-2.49 2.49 2.49 2.49 0 0 1-2.488-2.49 2.49 2.49 0 0 1 2.489-2.49 2.49 2.49 0 0 1 2.49 2.49Z"}"></path></svg>`;
});
export {
  Component as default
};
