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
  )}><path fill="${"#0097A7"}" d="${"M24 5C14.1 5 6 13.1 6 23v15h4V23c0-7.7 6.3-14 14-14s14 6.3 14 14v15h4V23c0-9.9-8.1-18-18-18z"}"></path><path fill="${"#37474F"}" d="${"M38 43h-4V31h4c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4zm-28 0h4V31h-4c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4z"}"></path></svg>`;
});
export {
  Component as default
};
