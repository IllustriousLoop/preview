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
  )}><path stroke="${"currentColor"}" stroke-width="${"2"}" d="${"M6 6h8v8H6z"}" opacity="${".5"}"></path><path fill-rule="${"evenodd"}" d="${"M9 9h10v10H9V9Zm6 2h2v6h-6v-2h4v-4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
