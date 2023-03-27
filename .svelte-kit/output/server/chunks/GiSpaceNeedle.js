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
  )}><path d="${"M247 32v87h18V32zm-40.4 105 14.5 29-68 17h205.8l-68-17 14.5-29zm-73 64-7 14h258.8l-7-14zm-55.88 32 21 14H413.3l21-14H77.72zm63.58 32 8.8 22h211.8l8.8-22zM124 305v18h50.3l36.6 171h18.4l-36.6-171H240v171h32V323h47.3l-36.6 171h18.4l36.6-171H388v-18H124z"}"></path></svg>`;
});
export {
  Component as default
};
