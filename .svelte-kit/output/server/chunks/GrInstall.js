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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M19 13.5v4L12 22l-7-4.5v-4m7 8.5v-8.5m6.5-5-6.5-4L15.5 2 22 6l-3.5 2.5Zm-13 0 6.5-4L8.5 2 2 6l3.5 2.5Zm13 .5L12 13l3.5 2.5 6.5-4L18.5 9Zm-13 0 6.5 4-3.5 2.5-6.5-4L5.5 9Z"}"></path></svg>`;
});
export {
  Component as default
};
