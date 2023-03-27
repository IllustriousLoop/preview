import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M9 1.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 9 1.5zM11.234 8 12 7.445 9.917 4.224a.5.5 0 0 0-.417-.225h-4a.497.497 0 0 0-.417.225L3 7.445 3.766 8l1.729-2.244.601 1.402-2.095 3.841h1.917l.333 5h1v-5h.5v5h1l.333-5h1.917L8.906 7.157l.601-1.402 1.729 2.244z"}"></path></svg>`;
});
export {
  Component as default
};
