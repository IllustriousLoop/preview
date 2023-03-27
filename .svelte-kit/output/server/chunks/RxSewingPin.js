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
  )}><path fill-rule="${"evenodd"}" d="${"M6 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm2 2.45a2.5 2.5 0 1 0-1 0v7.55a.5.5 0 0 0 1 0V5.95Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
