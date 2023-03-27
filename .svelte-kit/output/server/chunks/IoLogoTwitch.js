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
  )}><path d="${"m80 32-32 80v304h96v64h64l64-64h80l112-112V32H80zm336 256-64 64h-96.001L192 416v-64h-80V80h304v208z"}"></path><path d="${"M320 143h48v129h-48zm-112 0h48v129h-48z"}"></path></svg>`;
});
export {
  Component as default
};
