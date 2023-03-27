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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M15.984 17.208 16 2h2v20a7.593 7.593 0 0 0-2.02-.5L8 6.302V21.5a7.335 7.335 0 0 0-2 .5V2h2l7.984 15.208z"}"></path></svg>`;
});
export {
  Component as default
};
