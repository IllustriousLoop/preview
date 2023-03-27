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
  )}><path d="${"M20 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}"></path><path d="${"M12 6H4v14h14v-8h-2v6H6V8h6V6Z"}"></path></svg>`;
});
export {
  Component as default
};
