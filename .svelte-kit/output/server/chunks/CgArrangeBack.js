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
  )}><path fill-rule="${"evenodd"}" d="${"M3 3h8v4h6v6h4v8h-8v-4H7v-6H3V3Zm12 10h-2v2H9v-4h2V9h4v4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
