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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M16 17.472A5.978 5.978 0 0 0 20 19h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.96 7.96 0 0 1 12 21a7.963 7.963 0 0 1-4-1.07A7.96 7.96 0 0 1 4 21H2v-2h2c1.537 0 2.94-.578 4-1.528A5.978 5.978 0 0 0 12 19c1.537 0 2.94-.578 4-1.528zm-3.427-15.94.1.08L23 11h-3v6a5.99 5.99 0 0 1-2-.341V9.157l-6-5.455-6 5.454.001 7.502a5.978 5.978 0 0 1-1.702.335L4 17v-6H1l10.327-9.388a1 1 0 0 1 1.246-.08z"}"></path></svg>`;
});
export {
  Component as default
};
