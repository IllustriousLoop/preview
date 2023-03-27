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
  )}><path stroke="${"currentColor"}" stroke-width="${"2"}" d="${"m12.946 10.783-1.67 1.426 2.172.324A3.001 3.001 0 0 1 13 12.5H8v-1h3a3 3 0 0 0 1.946-.717Z"}"></path></svg>`;
});
export {
  Component as default
};
