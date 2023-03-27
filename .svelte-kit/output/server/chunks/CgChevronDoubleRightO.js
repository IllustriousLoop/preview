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
  )}><path d="${"M8.464 7.757 7.05 9.172 9.88 12l-2.83 2.828 1.415 1.415L12.707 12 8.464 7.757Z"}"></path><path d="${"m11.293 9.172 1.414-1.415L16.95 12l-4.243 4.243-1.414-1.415L14.12 12l-2.828-2.828Z"}"></path><path fill-rule="${"evenodd"}" d="${"M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Zm2 0a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
