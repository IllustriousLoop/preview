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
  )}><path d="${"M1 13v-2h14.485l-3.242-3.243 1.414-1.414L19.314 12l-5.657 5.657-1.414-1.415L15.485 13H1Zm19.288-7v12h2V6h-2Z"}"></path></svg>`;
});
export {
  Component as default
};
