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
  )}><path d="${"m86.627 56.843 86.84-33.014c98.7 82.092 216.765 136.019 295.685 246.884-65.653 71.335-17.208 71.745-20.095 104.064C426.444 500.632 315.248 482.712 225.14 488.17c-47.279-23.845-88.53-54.013-128.466-46.65L42.848 392z"}"></path></svg>`;
});
export {
  Component as default
};
