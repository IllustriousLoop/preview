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
  )}><path d="${"M10.73 14.43c0 1.19.07 2.29.2 3.3s.35 2 .67 2.99.76 1.9 1.33 2.75 1.27 1.59 2.09 2.25c1.53 0 2.99-.3 4.38-.89s2.58-1.4 3.59-2.4 1.81-2.2 2.4-3.6.89-2.85.89-4.39c0-2.04-.5-3.93-1.51-5.65s-2.37-3.1-4.1-4.1-3.61-1.51-5.65-1.51c-1.35 1.3-2.4 2.94-3.16 4.93s-1.13 4.08-1.13 6.32z"}"></path></svg>`;
});
export {
  Component as default
};
