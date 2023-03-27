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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M7 16h10V8H7v8Zm13-4c0 2 1 3 3 3v5H1v-5c2 0 3-1 3-3S3 9 1 9V4h22v5c-2 0-3 1-3 3Z"}"></path></svg>`;
});
export {
  Component as default
};
