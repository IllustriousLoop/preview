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
  )}><path d="${"M7.414 5 6 6.414l5.657 5.657L6 17.728l1.414 1.414 7.071-7.07L7.415 5Zm8.929 14V5h2v14h-2Z"}"></path></svg>`;
});
export {
  Component as default
};
