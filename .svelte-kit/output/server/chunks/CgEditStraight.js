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
  )}><path d="${"M12 4a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7Zm-7 9H1v-2h4v2Zm14 0a7 7 0 1 1-14 0h14Zm0 0v-2h4v2h-4Z"}"></path></svg>`;
});
export {
  Component as default
};
