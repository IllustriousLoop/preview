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
  )}><path fill-rule="${"evenodd"}" d="${"M7.793 4.61 12.068.398l4.21 4.275-1.424 1.403-1.804-1.831-.07 11.886 3.227 3.226-4.243 4.243-4.242-4.243 3.259-3.26.07-11.89-1.854 1.826L7.793 4.61Zm4.171 16.163 1.414-1.415-1.414-1.414-1.414 1.414 1.414 1.415Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
