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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0V0z"}"></path><path d="${"M5.54 8.46 2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm6.46 10-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zm6.46-10-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-10-2.92 1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle></svg>`;
});
export {
  Component as default
};
