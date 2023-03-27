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
  )}><path fill="${"#3F51B5"}" d="${"M29 44 17.3 30h23.4z"}"></path><path fill="${"#3F51B5"}" d="${"M21 6H8v8h13c2.2 0 4 1.8 4 4v17h8V18c0-6.6-5.4-12-12-12z"}"></path></svg>`;
});
export {
  Component as default
};
