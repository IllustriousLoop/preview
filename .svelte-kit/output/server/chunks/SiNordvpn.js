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
  )}><path d="${"M2.284 21.541A11.987 11.987 0 0 1 0 14.483C0 7.842 5.373 2.46 12 2.46c6.628 0 12 5.383 12 12.024a11.985 11.985 0 0 1-2.284 7.058l-5.763-9.378-.557.942.565 2.619L12 8.934l-2.45 4.145.57 2.645-2.076-3.556-5.76 9.373z"}"></path></svg>`;
});
export {
  Component as default
};
