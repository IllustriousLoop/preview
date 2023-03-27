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
  )}><path fill="${"#455A64"}" d="${"M4 31V8c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v23c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4z"}"></path><path fill="${"#BBDEFB"}" d="${"M20 7H8c-.6 0-1 .4-1 1v21c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1z"}"></path><circle cx="${"14"}" cy="${"32.5"}" r="${"1.5"}" fill="${"#37474F"}"></circle><path fill="${"#546E7A"}" d="${"M14 36V13c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v23c0 2.2-1.8 4-4 4H18c-2.2 0-4-1.8-4-4z"}"></path><path fill="${"#BBDEFB"}" d="${"M30 12H18c-.6 0-1 .4-1 1v21c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1z"}"></path><circle cx="${"24"}" cy="${"37.5"}" r="${"1.5"}" fill="${"#37474F"}"></circle><path fill="${"#E38939"}" d="${"M24 40V18c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4z"}"></path><path fill="${"#FFF3E0"}" d="${"M40 17H28c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V18c0-.6-.4-1-1-1z"}"></path><circle cx="${"34"}" cy="${"41.5"}" r="${"1.5"}" fill="${"#A6642A"}"></circle></svg>`;
});
export {
  Component as default
};
