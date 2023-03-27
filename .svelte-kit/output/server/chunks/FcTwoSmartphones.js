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
  )}><path fill="${"#37474F"}" d="${"M6 36V8c0-2.2 1.8-4 4-4h14c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4z"}"></path><path fill="${"#BBDEFB"}" d="${"M24 7H10c-.6 0-1 .4-1 1v25c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1z"}"></path><path fill="${"#78909C"}" d="${"M14 36h6v2h-6z"}"></path><path fill="${"#E38939"}" d="${"M20 40V12c0-2.2 1.8-4 4-4h14c2.2 0 4 1.8 4 4v28c0 2.2-1.8 4-4 4H24c-2.2 0-4-1.8-4-4z"}"></path><path fill="${"#FFF3E0"}" d="${"M38 11H24c-.6 0-1 .4-1 1v25c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V12c0-.6-.4-1-1-1z"}"></path><circle cx="${"31"}" cy="${"41"}" r="${"1.5"}" fill="${"#A6642A"}"></circle></svg>`;
});
export {
  Component as default
};
