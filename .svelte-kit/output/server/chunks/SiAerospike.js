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
  )}><path d="${"M0 0v24h24V0zm19.295 5.386v1.64l-3.576 1.586v7.363l3.576 1.602v1.565L5.672 12.98l-1.607-.688 1.607-.743zm-4.948 3.825L7.45 12.283l6.897 3.092Z"}"></path></svg>`;
});
export {
  Component as default
};
