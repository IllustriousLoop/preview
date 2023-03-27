import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#E38939"}" d="${"M8 41V7c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v34c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4z"}"></path><path fill="${"#FFF3E0"}" d="${"M36 6H12c-.6 0-1 .4-1 1v31c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1z"}"></path><circle cx="${"24"}" cy="${"42"}" r="${"1.5"}" fill="${"#A6642A"}"></circle></svg>`;
});
export {
  Component as default
};
