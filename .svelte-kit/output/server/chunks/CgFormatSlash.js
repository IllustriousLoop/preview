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
  )}><path fill-rule="${"evenodd"}" d="${"M14.526 6.106c.5.233.74.777.537 1.215L9.884 18.424c-.204.438-.775.604-1.276.37-.5-.233-.74-.778-.536-1.216L13.25 6.476c.204-.438.775-.604 1.276-.37Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
