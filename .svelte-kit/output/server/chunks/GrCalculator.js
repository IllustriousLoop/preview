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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M22 23H2V1h20v22Zm-6-6h2v2h-2v-2Zm-5 0h2v2h-2v-2Zm5-5h2v2h-2v-2Zm-5 0h2v2h-2v-2Zm-5 5h2v2H6v-2Zm0-5h2v2H6v-2Zm12-3H6V5h12v4Z"}"></path></svg>`;
});
export {
  Component as default
};
