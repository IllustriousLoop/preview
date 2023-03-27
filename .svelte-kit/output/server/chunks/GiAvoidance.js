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
  )}><path d="${"M323.9 45.2C269.6 171.8 229.2 213.1 114 258.1l-4.4-11.8-8.4-22.5-76.26 82.1 111.56 11.8-12.1-32.1c119.5-46.5 171-99 226.6-228.84zm51.7 149 12 32.1c-119.5 46.6-171 99.1-226.6 228.8l27.1 11.7c54.3-126.7 94.7-167.9 209.9-212.9l4.4 11.8 8.4 22.4 76.3-82.1z"}"></path></svg>`;
});
export {
  Component as default
};
