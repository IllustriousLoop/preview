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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"m14 9 4.5 2L23 9V4l-4.5-2L14 4v5ZM7 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM1 23v-2c0-4 2.5-6 6-6s6 2 6 6v2H1ZM14 4l4.5 2L23 4m-4.5 2v5-5Z"}"></path></svg>`;
});
export {
  Component as default
};
