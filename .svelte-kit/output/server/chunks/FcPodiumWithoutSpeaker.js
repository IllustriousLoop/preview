import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#B0BEC5"}" d="${"M43 16H5l-1 4 5 3-2-3h34l-2 3 5-3z"}"></path><path fill="${"#78909C"}" d="${"M7 20h34l-4 16H11z"}"></path></svg>`;
});
export {
  Component as default
};
