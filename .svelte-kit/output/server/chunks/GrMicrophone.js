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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M8 11c0 3 1.79 4 4 4s4-1 4-4V5c0-3-1.79-4-4-4S8 2 8 5v6ZM4 9v2c0 5 3.582 8 8 8s8-3 8-8V9m-8 15v-5"}"></path></svg>`;
});
export {
  Component as default
};
