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
  )}><path fill-rule="${"evenodd"}" d="${"M4 6h8v1H4V6zm8 3H4v1h8V9z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"m1 4 1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
