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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 17c-2.727 0-6-2.778-6-5s3.273-5 6-5 6 2.778 6 5-3.273 5-6 5Zm-1-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm9-7L4 19"}"></path></svg>`;
});
export {
  Component as default
};
