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
  )}><path d="${"M17.44 9.33h-1.1V6.4a4.34 4.34 0 0 0-8.68 0v2.93h-1.1a2.5 2.5 0 0 0-2.5 2.5v7.61a2.507 2.507 0 0 0 2.5 2.5h10.88a2.507 2.507 0 0 0 2.5-2.5v-7.61a2.5 2.5 0 0 0-2.5-2.5ZM8.66 6.4a3.34 3.34 0 0 1 6.68 0v2.93H8.66Zm10.28 13.04a1.511 1.511 0 0 1-1.5 1.5H6.56a1.511 1.511 0 0 1-1.5-1.5v-7.61a1.5 1.5 0 0 1 1.5-1.5h10.88a1.5 1.5 0 0 1 1.5 1.5Z"}"></path><path d="${"M13 14.95a.984.984 0 0 1-.5.86v1.5a.5.5 0 0 1-1 0v-1.5a.984.984 0 0 1-.5-.86 1 1 0 0 1 2 0Z"}"></path></svg>`;
});
export {
  Component as default
};
