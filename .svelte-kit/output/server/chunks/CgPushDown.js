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
  )}><path d="${"M11 1h2v14.485l3.243-3.242 1.414 1.414L12 19.314l-5.657-5.657 1.414-1.414L11 15.485V1Zm7 19.288H6v2h12v-2Z"}"></path></svg>`;
});
export {
  Component as default
};
