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
  )}><path d="${"M8.586 5.586a2 2 0 0 0 0 2.828L12.171 12l-3.585 3.586a2 2 0 1 0 2.828 2.828L17.829 12l-6.415-6.414a2 2 0 0 0-2.828 0z"}"></path></svg>`;
});
export {
  Component as default
};
