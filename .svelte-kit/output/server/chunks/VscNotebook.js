import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"m2 2 1-1h9l1 1v12l-1 1H3l-1-1V2zm1 0v12h9V2H3zm1 2 1-1h5l1 1v1l-1 1H5L4 5V4zm1 0v1h5V4H5zm10 1h-1v2h1V5zm-1 3h1v2h-1V8zm1 3h-1v2h1v-2z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
