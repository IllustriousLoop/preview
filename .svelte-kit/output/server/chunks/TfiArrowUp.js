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
  )}><path d="${"M15.146 8.854 9 2.707V16H8V2.707L1.854 8.854l-.708-.708L8.5.793l7.354 7.354-.708.707z"}"></path></svg>`;
});
export {
  Component as default
};
