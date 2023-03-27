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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 9H5.5C3.5 9 2 7.5 2 5.5S3.5 2 5.5 2 9 3.5 9 5.5v13c0 2-1.5 3.5-3.5 3.5S2 20.5 2 18.5 3.5 15 5.5 15h13c2 0 3.5 1.5 3.5 3.5S20.5 22 18.5 22 15 20.5 15 18.5v-13c0-2 1.5-3.5 3.5-3.5S22 3.5 22 5.5 20.5 9 18.5 9H12Z"}"></path></svg>`;
});
export {
  Component as default
};
