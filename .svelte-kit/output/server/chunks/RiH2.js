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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4a3.75 3.75 0 0 1 2.978 6.03l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546a1.75 1.75 0 1 0-3.064-1.292l-.006.144h-2A3.75 3.75 0 0 1 18.5 8z"}"></path></svg>`;
});
export {
  Component as default
};
