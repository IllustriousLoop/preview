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
  )}><path d="${"M14 8h2v8h-2V8Zm-5.297 8.243-1.415-1.414L10.117 12 7.288 9.172l1.415-1.415L12.945 12l-4.242 4.243Z"}"></path><path fill-rule="${"evenodd"}" d="${"M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11Zm-2 0a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
