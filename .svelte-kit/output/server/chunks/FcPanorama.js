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
  )}><path fill="${"#F57C00"}" d="${"M4 9v32s8.4-3 20-3 20 3 20 3V9s-6.7 3-20 3S4 9 4 9z"}"></path><path fill="${"#942A09"}" d="${"M24 34h.4L15 19 6.9 36.2c3.4-.9 9.6-2.2 17.1-2.2z"}"></path><path fill="${"#BF360C"}" d="${"M24 34c3.3 0 6.3.2 9 .6l-8-11.8-7.8 11.5c2.1-.2 4.4-.3 6.8-.3z"}"></path><path fill="${"#E65100"}" d="${"M40.7 36 35 26.5l-5 7.8c4.5.4 8.2 1.1 10.7 1.7z"}"></path><ellipse cx="${"36"}" cy="${"19.5"}" fill="${"#FFF9C4"}" rx="${"2"}" ry="${"2.5"}"></ellipse></svg>`;
});
export {
  Component as default
};
