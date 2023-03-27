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
  )}><path d="${"m27.91 27.78 11.61 46.46 48 16L119 216.2h128v-78h-77.5l-32.2-96.75zm456.19 0L374.7 41.45l-32.2 96.75H265v78h128l30.3-121.16 1.2-4.8 48-16zM213.6 74.22l-23 45.98h130.8l-23-45.98zm-39 159.98 3 5.9L311 292v-4.4l6.7-18-90.9-35.4zm102 0 47.4 18.4 6.9-18.4zm-87.1 29.9 11.5 23v10.1L311 340v-28.6zm11.5 52.5v28.6L311 388v-28.6zm0 48v28.7L311 436v-28.6zm0 48V443l110 41.2v-28.8z"}"></path></svg>`;
});
export {
  Component as default
};
