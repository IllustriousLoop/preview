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
  )}><g fill="${"#1565C0"}"><path d="${"M46.1 24 33 35V13zM10 20h4v8h-4zm-6 0h4v8H4zm12 0h4v8h-4z"}"></path><path d="${"M22 20h14v8H22z"}"></path></g></svg>`;
});
export {
  Component as default
};
