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
  )}><path fill-rule="${"evenodd"}" d="${"M13 9h-3v8H8V9H5V7h8v2Zm5 4h-2v4h-2v-4h-2v-2h6v2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
