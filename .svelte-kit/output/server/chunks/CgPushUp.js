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
  )}><path fill-rule="${"evenodd"}" d="${"M11 22.288h2V7.802l3.243 3.243 1.414-1.414L12 3.974 6.343 9.63l1.414 1.414L11 7.802v14.486ZM18 3H6V1h12v2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
