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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M7 3h15M7 9h9m-9 6h15M2 2h2v2H2V2Zm0 6h2v2H2V8Zm0 6h2v2H2v-2Zm0 6h2v2H2v-2Zm5 1h9"}"></path></svg>`;
});
export {
  Component as default
};
