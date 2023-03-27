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
  )}><path fill="${"#3F51B5"}" d="${"m4 29 14-11.7v23.4z"}"></path><path fill="${"#3F51B5"}" d="${"M42 21V8h-8v13c0 2.2-1.8 4-4 4H13v8h17c6.6 0 12-5.4 12-12z"}"></path></svg>`;
});
export {
  Component as default
};
