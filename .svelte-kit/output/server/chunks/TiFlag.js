import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M18.383 4.318a1 1 0 0 0-1.09.217 3.248 3.248 0 0 1-4.586 0 5.25 5.25 0 0 0-7.414 0A.997.997 0 0 0 5 5.242v13a1 1 0 1 0 2 0v-4.553a3.248 3.248 0 0 1 4.293.26 5.25 5.25 0 0 0 7.414 0 1 1 0 0 0 .293-.707v-8a1 1 0 0 0-.617-.924z"}"></path></svg>`;
});
export {
  Component as default
};
