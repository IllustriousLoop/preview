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
  )}><path fill-rule="${"evenodd"}" d="${"M9 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1ZM8 9h8v2a4 4 0 0 1-8 0V9Zm5 7.917A6.002 6.002 0 0 0 18 11V7H6v4a6.002 6.002 0 0 0 5 5.917V22a1 1 0 1 0 2 0v-5.083ZM14 3a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V3Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
