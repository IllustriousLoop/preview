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
  )}><path d="${"M23.098 2.406c0 1.329-1.052 2.406-2.349 2.406S18.4 3.735 18.4 2.406 19.452 0 20.75 0s2.348 1.077 2.348 2.406zm-11.51.541C5.688 2.948.903 7.85.903 13.896V24H7.48V13.895c0-2.326 1.84-4.21 4.11-4.21s4.11 1.884 4.11 4.21V24h6.577V13.895c0-6.046-4.785-10.947-10.687-10.947z"}"></path></svg>`;
});
export {
  Component as default
};
