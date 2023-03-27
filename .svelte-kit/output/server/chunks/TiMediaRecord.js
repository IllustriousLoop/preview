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
  )}><path d="${"M18 12a5.985 5.985 0 0 0-1.757-4.243A5.985 5.985 0 0 0 12 6a5.985 5.985 0 0 0-4.242 1.757A5.982 5.982 0 0 0 6 12c0 1.656.672 3.156 1.758 4.242S10.344 18 12 18a5.982 5.982 0 0 0 4.243-1.758A5.985 5.985 0 0 0 18 12z"}"></path></svg>`;
});
export {
  Component as default
};
