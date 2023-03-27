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
  )}><path fill-rule="${"evenodd"}" d="${"M3 4h18v7a9 9 0 1 1-18 0V4ZM1 2h22v9c0 6.075-4.925 11-11 11S1 17.075 1 11V2Zm10.293 12.694a1 1 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414L12 12.572 8.464 9.037A1 1 0 0 0 7.05 10.45l4.243 4.242Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
