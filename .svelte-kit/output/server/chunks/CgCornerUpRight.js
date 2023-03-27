import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m13.372 14.722 1.412 1.417 6.377-6.35-6.35-6.378-1.417 1.411 3.776 3.793-10.305-.022a4 4 0 0 0-4.009 3.991l-.017 8 2 .005.017-8a2 2 0 0 1 2.004-1.996l10.636.023-4.124 4.106Z"}"></path></svg>`;
});
export {
  Component as default
};
