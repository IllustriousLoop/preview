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
  )}><path d="${"M11 14.986a1 1 0 1 0 2 0V7.828l3.243 3.243 1.414-1.414L12 4 6.343 9.657l1.414 1.414L11 7.83v7.157Z"}"></path><path d="${"M4 14h2v4h12v-4h2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4Z"}"></path></svg>`;
});
export {
  Component as default
};
