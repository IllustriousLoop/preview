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
  )}><path d="${"M256 18.365 50.14 136 256 253.635 461.86 136 256 18.365zm-154 168L50.14 216 256 333.635 461.86 216 410 186.365l-154 88-154-88zm0 80L50.14 296 256 413.635 461.86 296 410 266.365l-154 88-154-88zm0 80L50.14 376 256 493.635 461.86 376 410 346.365l-154 88-154-88z"}"></path></svg>`;
});
export {
  Component as default
};
