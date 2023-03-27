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
  )}><path d="${"m12.052 14.829 1.414 1.414L17.71 12l-4.243-4.243-1.414 1.415L13.88 11H6.343v2h7.537l-1.828 1.829Z"}"></path><path fill-rule="${"evenodd"}" d="${"M19.778 19.778c4.296-4.296 4.296-11.26 0-15.556-4.296-4.296-11.26-4.296-15.556 0-4.296 4.296-4.296 11.26 0 15.556 4.296 4.296 11.26 4.296 15.556 0Zm-1.414-1.414A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
