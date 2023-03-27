import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m13.603 11.349-.706-.708L14.541 9H9v5.541l1.641-1.644.708.706L8.5 16.458l-2.849-2.855.708-.706L8 14.541V9H2.459l1.644 1.641-.706.708L.542 8.5l2.855-2.849.706.708L2.459 8H8V2.459L6.359 4.103l-.708-.706L8.5.542l2.849 2.855-.708.706L9 2.459V8h5.541l-1.644-1.641.706-.708L16.458 8.5l-2.855 2.849z"}"></path></svg>`;
});
export {
  Component as default
};
