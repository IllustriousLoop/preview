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
  )}><path d="${"M229.7 22.66A155.2 235.6 80.24 0 0 23.81 215.6 155.2 235.6 80.24 0 0 236.7 333.4c23.8 55.6-17.1 109.3-83.6 161.1 86.2-28.3 176.2-94.4 179.7-178.7a155.2 235.6 80.24 0 0 155.4-180.1A155.2 235.6 80.24 0 0 229.7 22.66z"}"></path></svg>`;
});
export {
  Component as default
};
