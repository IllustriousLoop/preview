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
  )}><path d="${"m4.59 7.41 4.94 3.54L4.59 24zm0-7.41v6.36l9.53 5.29 4.59-3.52zm0 24 14.82-8.47v-6.7Z"}"></path></svg>`;
});
export {
  Component as default
};
