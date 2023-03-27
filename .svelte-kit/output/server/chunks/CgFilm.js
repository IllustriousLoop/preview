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
  )}><path d="${"M6 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM6 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM6 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"}"></path><path fill-rule="${"evenodd"}" d="${"M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4Zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
