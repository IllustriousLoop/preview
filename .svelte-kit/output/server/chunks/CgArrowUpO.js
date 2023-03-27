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
  )}><path d="${"m14.829 11.948 1.414-1.414L12 6.29l-4.243 4.243 1.415 1.414L11 10.12v7.537h2V10.12l1.829 1.828Z"}"></path><path fill-rule="${"evenodd"}" d="${"M19.778 4.222c-4.296-4.296-11.26-4.296-15.556 0-4.296 4.296-4.296 11.26 0 15.556 4.296 4.296 11.26 4.296 15.556 0 4.296-4.296 4.296-11.26 0-15.556Zm-1.414 1.414A9 9 0 1 0 5.636 18.364 9 9 0 0 0 18.364 5.636Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
