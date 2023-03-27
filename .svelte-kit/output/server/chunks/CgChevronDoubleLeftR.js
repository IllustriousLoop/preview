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
  )}><path d="${"m12.707 9.172-1.414-1.415L7.05 12l4.243 4.243 1.414-1.415L9.88 12l2.828-2.828Z"}"></path><path d="${"m15.536 7.757 1.414 1.415L14.12 12l2.829 2.828-1.414 1.415L11.293 12l4.243-4.243Z"}"></path><path fill-rule="${"evenodd"}" d="${"M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5Zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
