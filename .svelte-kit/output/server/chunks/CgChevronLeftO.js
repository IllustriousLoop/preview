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
  )}><path d="${"m12 7.757 1.414 1.415L10.586 12l2.828 2.829L12 16.242 7.757 12 12 7.757Z"}"></path><path fill-rule="${"evenodd"}" d="${"M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
