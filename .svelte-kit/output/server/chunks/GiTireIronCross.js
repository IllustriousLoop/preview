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
  )}><path d="${"M52.47 16.94 16.95 52.45 71.3 106.6h22.59L215 227.7v56.5L93.84 405.4H71.28l-54.26 54.2 35.34 35.5 54.24-54.4v-22.5L227.8 297h56.4l121.2 121.2v22.5l54.2 54.3 35.4-35.4-54.3-54.2h-22.5L297 284.2v-56.5l121.1-121.1h22.6L495 52.36 459.7 17l-54.3 54.25v22.57L284.2 215h-56.4L106.6 93.86V71.28L52.47 16.94z"}"></path></svg>`;
});
export {
  Component as default
};
