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
  )}><path d="${"M476.5 195.8 52.59 216.6l-6.56 28.7H186l2.2 15.3h298.1zM41.78 271l-20.77 92.6 6.56 27.6H486.6l4.4-27.6-311.4-2.2L161 271zm150.72 8.1 7.1 41h269.5v-41zM427 295h26.4c3.8 0 6.8 3 6.8 6.9 0 3.6-3 6.7-6.8 6.7H427c-3.9 0-6.9-3.1-6.9-6.7 0-3.9 3-6.9 6.9-6.9z"}"></path></svg>`;
});
export {
  Component as default
};
