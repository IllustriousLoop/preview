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
  )}><path fill-rule="${"evenodd"}" d="${"M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm9 7a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
