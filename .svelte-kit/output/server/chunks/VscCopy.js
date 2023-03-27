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
  )}><path fill-rule="${"evenodd"}" d="${"m4 4 1-1h5.414L14 6.586V14l-1 1H5l-1-1V4zm9 3-3-3H5v10h8V7z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M3 1 2 2v10l1 1V2h6.414l-1-1H3z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
