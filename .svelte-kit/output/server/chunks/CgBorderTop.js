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
  )}><path fill-opacity="${".3"}" d="${"M8 16h8V9h3v10H5V9h3v7Z"}"></path><path fill="${"#100"}" d="${"M5 7h14V4H5v3Z"}"></path></svg>`;
});
export {
  Component as default
};
