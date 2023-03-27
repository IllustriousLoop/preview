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
  )}><path d="${"M0 0v24h7.38v-3.69H3.692L3.69 3.69h9.229V0H0zm16.61 0v3.69h3.7v16.62h-9.238V24H24V0h-7.39zm-.003 6.49-3.689.717v9.227l3.69-.715V6.49zm-5.535 1.076-3.69.715v9.229l3.69-.717V7.566z"}"></path></svg>`;
});
export {
  Component as default
};
