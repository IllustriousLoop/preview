import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M6.638 5.209a8.782 8.782 0 1 0 13.917 8.96 8.871 8.871 0 0 0-3.189-8.96c-.5-.39-1.214.312-.707.707a7.93 7.93 0 0 1 3.082 7.113 7.787 7.787 0 0 1-15.308.956 7.9 7.9 0 0 1 2.912-8.069c.507-.394-.205-1.1-.707-.707Z"}"></path><path d="${"M12.5 12.519a.5.5 0 0 1-1 0V3.548a.5.5 0 0 1 1 0Z"}"></path></svg>`;
});
export {
  Component as default
};
