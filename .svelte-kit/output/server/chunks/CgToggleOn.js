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
  )}><path d="${"M7 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"}"></path><path fill-rule="${"evenodd"}" d="${"M24 12a7 7 0 0 0-7-7H7a7 7 0 0 0 0 14h10a7 7 0 0 0 7-7Zm-7-5H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
