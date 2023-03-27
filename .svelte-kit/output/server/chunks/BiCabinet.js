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
  )}><path d="${"M21 4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4zM5 4h14v7H5V4zm0 16v-7h14.001v7H5z"}"></path><path d="${"M14 7h-4V6H8v3h8V6h-2zm0 8v1h-4v-1H8v3h8v-3z"}"></path></svg>`;
});
export {
  Component as default
};
