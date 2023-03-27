import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { style: "enable-background:new 0 0 30 30" },
      { viewBox: "0 0 30 30" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M9.76 24.6V7.45h1.13V24.6H9.76zm1.94-10.55v-6.6h8.55v6.6H11.7zm2.36-2h3.81v-2.5h-3.81v2.5z"}"></path></svg>`;
});
export {
  Component as default
};
