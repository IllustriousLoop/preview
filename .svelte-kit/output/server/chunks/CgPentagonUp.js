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
  )}><path fill-rule="${"evenodd"}" d="${"m12 16 5 2V8l-5-2-5 2v10l5-2Zm-3-.954 3-1.2 3 1.2V9.354l-3-1.2-3 1.2v5.692Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
