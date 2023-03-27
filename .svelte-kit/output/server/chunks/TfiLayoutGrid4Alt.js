import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M1 1h3v3H1V1zm4 3h3V1H5v3zm4 0h3V1H9v3zm4-3v3h3V1h-3zM1 8h3V5H1v3zm4 0h3V5H5v3zm4 0h3V5H9v3zm4 0h3V5h-3v3zM1 12h3V9H1v3zm4 0h3V9H5v3zm4 0h3V9H9v3zm4 0h3V9h-3v3zM1 16h3v-3H1v3zm4 0h3v-3H5v3zm4 0h3v-3H9v3zm4 0h3v-3h-3v3z"}"></path></svg>`;
});
export {
  Component as default
};
