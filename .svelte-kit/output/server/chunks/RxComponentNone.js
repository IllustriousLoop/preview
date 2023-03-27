import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M7.854 1.49a.5.5 0 0 0-.708 0L1.49 7.146a.5.5 0 0 0 0 .708l2.474 2.474-2.318 2.318a.5.5 0 0 0 .708.708l2.318-2.318 2.474 2.474a.5.5 0 0 0 .708 0l5.657-5.656a.5.5 0 0 0 0-.708l-2.475-2.474 2.318-2.318a.5.5 0 1 0-.708-.708l-2.318 2.318L7.854 1.49ZM9.62 4.672 7.5 2.55 2.55 7.5l2.122 2.121 4.95-4.95Zm-4.24 5.656L7.5 12.45l4.95-4.95-2.121-2.121-4.95 4.95Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
