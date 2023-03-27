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
  )}><path d="${"M16 13v-1.5h-6v-2h6V8l3 2.5-3 2.5Zm-8 4v-1.5h6v-2H8V12l-3 2.5L8 17Z"}"></path></svg>`;
});
export {
  Component as default
};
