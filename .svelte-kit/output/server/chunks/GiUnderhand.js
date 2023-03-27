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
  )}><path d="${"M44.142 366.824c95.92 0 99.81-1.297 99.81-1.297 123.716 201.064 221.662-72.51 234.36-171.483l-36.24-.158 70.897-123.76 68.082 123.38-35.26 1.454c-81.335 283.797-299.33 296.3-401.65 171.864z"}"></path></svg>`;
});
export {
  Component as default
};
