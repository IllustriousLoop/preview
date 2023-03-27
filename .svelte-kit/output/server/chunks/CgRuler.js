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
  )}><path fill-rule="${"evenodd"}" d="${"M3 6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H3Zm6 2H7v5a1 1 0 1 1-2 0V8H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2v3a1 1 0 1 1-2 0V8h-2v5a1 1 0 1 1-2 0V8h-2v3a1 1 0 1 1-2 0V8Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
