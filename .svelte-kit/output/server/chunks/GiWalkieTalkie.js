import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M71 32v135h18V32H71zm256 0v135h18V32h-18zm-208 95.604V167h18v-39.396h-18zm256 0V167h18v-39.396h-18zM57 185v99.27l16 16V487h110V300.27l16-16V185H57zm256 0v99.27l16 16V487h110V300.27l16-16V185H313zm-96 7v80h16.432v-80H217zm256 0v80h16.432v-80H473zm-393 7h96v18H80v-18zm256 0h96v18h-96v-18zM80 231h96v18H80v-18zm256 0h96v18h-96v-18zM80 263h96v18H80v-18zm256 0h96v18h-96v-18zm-224 41a24 24 0 0 1 24 24 24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 24-24zm256 0a24 24 0 0 1 24 24 24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 24-24z"}"></path></svg>`;
});
export {
  Component as default
};
