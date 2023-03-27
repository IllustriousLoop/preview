import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M5 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 .407.79l-5 7a.5.5 0 0 1-.814 0l-5-7A.5.5 0 0 1 2.5 6H5V3.5ZM6 4v2.5a.5.5 0 0 1-.5.5H3.472L7.5 12.64 11.528 7H9.5a.5.5 0 0 1-.5-.5V4H6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
