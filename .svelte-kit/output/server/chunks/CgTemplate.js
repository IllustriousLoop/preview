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
  )}><path fill-rule="${"evenodd"}" d="${"M3 3v6h18V3H3Zm16 2H5v2h14V5ZM3 11v10h8V11H3Zm6 2H5v6h4v-6Z"}" clip-rule="${"evenodd"}"></path><path d="${"M21 11h-8v2h8v-2Zm-8 4h8v2h-8v-2Zm8 4h-8v2h8v-2Z"}"></path></svg>`;
});
export {
  Component as default
};
