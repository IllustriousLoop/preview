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
  )}><path d="${"M7.8 24.6V7.45h1.13V24.6H7.8zm1.93-3.08v-6.6h8.55v6.6H9.73zm0-7.47v-6.6h8.55v6.6H9.73zm2.36 5.47h3.81v-2.51h-3.81v2.51zm0-7.47h3.81v-2.5h-3.81v2.5z"}"></path></svg>`;
});
export {
  Component as default
};
