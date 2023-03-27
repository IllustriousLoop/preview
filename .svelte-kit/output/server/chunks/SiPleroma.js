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
  )}><path d="${"M6.36 0a1.868 1.868 0 0 0-1.87 1.868V24h5.964V0zm7.113 0v12h4.168a1.868 1.868 0 0 0 1.868-1.868V0zm0 18.036V24h4.168a1.868 1.868 0 0 0 1.868-1.868v-4.096Z"}"></path></svg>`;
});
export {
  Component as default
};
