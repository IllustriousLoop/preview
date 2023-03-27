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
  )}><path d="${"M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914-1.414-1.414 4.95-4.95Z"}"></path><path d="${"M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4v-2Z"}"></path></svg>`;
});
export {
  Component as default
};
