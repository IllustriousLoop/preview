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
  )}><path d="${"M130.458 203.435 226.656 58.38 448 107.084v92.378l40.823 49.164-13.937 107.434-67.182 85.268L281.328 448 288 352l-64-48-23.835 80L112 352l-36.342-77.936 13.39-71.775-54.041-27.343L24.779 112l24.384 49.054L112 176z"}"></path></svg>`;
});
export {
  Component as default
};
