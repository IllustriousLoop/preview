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
  )}><path d="${"M422.52 404.55c0-92.006-1.243-95.736-1.243-95.736 204.583-58.483-212.586-77.202-252.76-71.863l-.15 34.762-118.71-68.004 118.346-65.303 1.394 33.82c303.74-5.71 371.256 83.987 253.124 232.325z"}"></path></svg>`;
});
export {
  Component as default
};
