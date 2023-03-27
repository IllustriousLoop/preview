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
  )}><path d="${"M10.027 10.074V0H3.973v10.077l3.021-2.053 3.033 2.05zM4.973 8.188V1h4.055v7.191L6.991 6.815 4.973 8.188zM16 1.007V16H1V1.007h1.974v1H2V15h13V2.007h-4.005v-1H16z"}"></path></svg>`;
});
export {
  Component as default
};
