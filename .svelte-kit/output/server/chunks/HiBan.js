import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M13.477 14.89A6 6 0 0 1 5.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 0 1 8.367 8.367zM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
