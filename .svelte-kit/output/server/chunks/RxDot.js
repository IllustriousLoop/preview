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
  )}><path fill-rule="${"evenodd"}" d="${"M7.5 9.125a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25Zm0 1a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
