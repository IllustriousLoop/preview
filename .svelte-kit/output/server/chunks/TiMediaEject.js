import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M17 16H7a2 2 0 0 0 0 4h10a2 2 0 0 0 0-4zm1.433-5.396L12 4l-6.433 6.604A2 2 0 0 0 7 14h10a2 2 0 0 0 1.433-3.396z"}"></path></svg>`;
});
export {
  Component as default
};
