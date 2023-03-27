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
  )}><path fill-rule="${"evenodd"}" d="${"M7 8v5a5 5 0 0 0 10 0V8H7ZM5 4h14v9a7 7 0 1 1-14 0V4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
