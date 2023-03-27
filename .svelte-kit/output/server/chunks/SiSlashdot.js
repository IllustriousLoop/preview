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
  )}><path d="${"M19.777 0 7.037 24H1.868L14.605 0h5.172zm2.354 19.801a4.107 4.107 0 0 1-4.109 4.105 4.106 4.106 0 1 1 0-8.212 4.109 4.109 0 0 1 4.109 4.107z"}"></path></svg>`;
});
export {
  Component as default
};
