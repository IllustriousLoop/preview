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
  )}><path d="${"m18.37 8-4.5 2.598V9H6.89v4h-2V7h8.98V5.402L18.37 8Zm-8.24 9h8.98v-6h-2v4h-6.98v-1.598L5.63 16l4.5 2.598V17Z"}"></path></svg>`;
});
export {
  Component as default
};
