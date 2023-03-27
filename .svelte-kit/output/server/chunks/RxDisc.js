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
  )}><path fill-rule="${"evenodd"}" d="${"M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0 5.673 5.673 0 0 1-11.346 0Zm6.546 0a.873.873 0 1 1-1.745 0 .873.873 0 0 1 1.745 0Zm.95 0a1.823 1.823 0 1 1-3.645 0 1.823 1.823 0 0 1 3.645 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
