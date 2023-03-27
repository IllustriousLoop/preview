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
  )}><path d="${"M10.1 4.1v-2h-8v8h2V5.516l5.779 5.778 1.414-1.414L5.515 4.1H10.1Zm9.8 9.8h2v8h-8v-2h4.585l-5.778-5.779 1.414-1.414 5.778 5.778V13.9Z"}"></path></svg>`;
});
export {
  Component as default
};
