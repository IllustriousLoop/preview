import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M11 6h-1v-.5a.5.5 0 0 0-.5-.5H8.479v5.5a.5.5 0 0 0 .5.5h.5v1h-3v-1h.5a.5.5 0 0 0 .5-.5V5H6.5a.5.5 0 0 0-.5.5V6H5V4h6v2zm2.914 2.048-1.462-1.462.707-.707 1.816 1.816v.707l-1.768 1.767-.707-.707 1.414-1.414zM3.548 9.462 2.086 8 3.5 6.586l-.707-.707-1.768 1.767v.708l1.816 1.815.707-.707z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
