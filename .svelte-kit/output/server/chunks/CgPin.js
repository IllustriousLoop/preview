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
  )}><path fill-rule="${"evenodd"}" d="${"M16.272 10.272a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M5.794 16.518a9 9 0 1 1 12.724-.312l-6.206 6.518-6.518-6.206Zm11.276-1.691-4.827 5.07-5.07-4.827a7 7 0 1 1 9.897-.243Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
