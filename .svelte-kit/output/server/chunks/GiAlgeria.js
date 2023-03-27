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
  )}><path d="${"M418.4 23.98c-87.5-7.58-164.6 2.58-228 35.99l11.3 83.23-181.56 71.3-5.99 43.4L294.5 490.4l57-2.2 146.4-114c-60.4-73.4-22.3-118.9-45.6-161.2-48-86.8-45.2-133.74-33.9-189.02z"}"></path></svg>`;
});
export {
  Component as default
};
