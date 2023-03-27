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
  )}><path fill-rule="${"evenodd"}" d="${"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
