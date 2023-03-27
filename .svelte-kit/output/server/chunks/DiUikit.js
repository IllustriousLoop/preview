import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"m17.859 9.882 4.544 2.479v7.023l-6.61 3.718-6.197-3.718V13.6l-4.131-2.066v10.742l10.328 6.197 10.742-6.197V9.882l-4.958-2.479-3.718 2.479zm1.653-3.718-4.131-2.066-3.718 2.479 4.131 2.066 3.718-2.479z"}"></path></svg>`;
});
export {
  Component as default
};
