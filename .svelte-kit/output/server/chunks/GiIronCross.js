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
  )}><path d="${"M486 371.316V142.75a399.056 399.056 0 0 1-185.685 69.28 399.135 399.135 0 0 1 70.973-186.002H142.72A399.056 399.056 0 0 1 212 211.714 399.135 399.135 0 0 1 26 140.74v228.57a399.056 399.056 0 0 1 185.685-69.28 399.135 399.135 0 0 1-70.973 185.944H369.28A399.056 399.056 0 0 1 300 300.342a399.135 399.135 0 0 1 186 70.974z"}"></path></svg>`;
});
export {
  Component as default
};
