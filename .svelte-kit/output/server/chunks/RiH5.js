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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M22 8v2h-4.323l-.464 2.636A3.999 3.999 0 0 1 22.25 16.5a4.001 4.001 0 0 1-7.846 1.103l1.923-.551a2.002 2.002 0 0 0 3.923-.552 2 2 0 0 0-3.56-1.252l-1.81-.904L16 8h6zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z"}"></path></svg>`;
});
export {
  Component as default
};
