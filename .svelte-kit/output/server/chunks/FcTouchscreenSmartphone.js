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
  )}><path fill="${"#E38939"}" d="${"M12 40V8c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4z"}"></path><path fill="${"#FFF3E0"}" d="${"M32 7H16c-.6 0-1 .4-1 1v29c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1z"}"></path><circle cx="${"24"}" cy="${"41"}" r="${"1.5"}" fill="${"#A6642A"}"></circle><circle cx="${"24"}" cy="${"23"}" r="${"2"}" fill="${"#E91E63"}"></circle><circle cx="${"24"}" cy="${"23"}" r="${"4"}" fill="${"none"}" stroke="${"#F48FB1"}" stroke-miterlimit="${"10"}" stroke-width="${"2"}"></circle><circle cx="${"24"}" cy="${"23"}" r="${"6.5"}" fill="${"none"}" stroke="${"#F8BBD0"}" stroke-miterlimit="${"10"}"></circle></svg>`;
});
export {
  Component as default
};
