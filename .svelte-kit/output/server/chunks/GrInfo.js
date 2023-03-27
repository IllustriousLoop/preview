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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M15 17c0-3 4-5 4-9s-3-7-7-7-7 3-7 7 4 6 4 9v3c0 2 1 3 3 3s3-1 3-3v-3Zm-6 1h6"}"></path></svg>`;
});
export {
  Component as default
};
