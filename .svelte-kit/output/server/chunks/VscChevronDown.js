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
  )}><path fill-rule="${"evenodd"}" d="${"m7.976 10.072 4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
