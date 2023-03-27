import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m11.642 12.063.716.698L8.5 16.716l-3.858-3.954.716-.698L8 14.771V2.229L5.358 4.937l-.716-.699L8.5.284l3.858 3.954-.716.698L9 2.229v12.543l2.642-2.709z"}"></path></svg>`;
});
export {
  Component as default
};
