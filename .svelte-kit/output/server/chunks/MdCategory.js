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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m12 2-5.5 9h11z"}"></path><circle cx="${"17.5"}" cy="${"17.5"}" r="${"4.5"}"></circle><path d="${"M3 13.5h8v8H3z"}"></path></svg>`;
});
export {
  Component as default
};
