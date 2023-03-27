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
  )}><path d="${"m17.657 8.962-1.418 1.411-3.255-3.27-.013 13.605-2-.002.013-13.568-3.23 3.215-1.41-1.417 5.67-5.644 5.643 5.67Z"}"></path></svg>`;
});
export {
  Component as default
};
