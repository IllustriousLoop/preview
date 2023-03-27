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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M2 21v-2h2V4.835a1 1 0 0 1 .821-.984l9.472-1.722a.599.599 0 0 1 .707.59v1.28L19 4a1 1 0 0 1 1 1v14h2v2h-4V6h-3v15H2zM13 4.396 6 5.67V19h7V4.396zM12 11v2h-2v-2h2z"}"></path></svg>`;
});
export {
  Component as default
};
