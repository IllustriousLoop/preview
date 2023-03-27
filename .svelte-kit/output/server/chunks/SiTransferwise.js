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
  )}><path d="${"M9.871 24h3.11L23.127 0H3.694l3.748 6.291-6.571 6.283h11.361l1.068-2.517H7.03l3.792-3.783L8.61 2.516h10.337z"}"></path></svg>`;
});
export {
  Component as default
};
