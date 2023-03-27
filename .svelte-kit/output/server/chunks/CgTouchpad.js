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
  )}><path fill-rule="${"evenodd"}" d="${"M20 21a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16ZM4 5h16a1 1 0 0 1 1 1v8H3V6a1 1 0 0 1 1-1ZM3 16v2a1 1 0 0 0 1 1h7v-3H3Zm10 3v-3h8v2a1 1 0 0 1-1 1h-7Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
