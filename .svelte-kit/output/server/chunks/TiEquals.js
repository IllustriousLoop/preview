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
  )}><path d="${"M18 7H6a2 2 0 0 0 0 4h12a2 2 0 0 0 0-4zm0 7H6a2 2 0 0 0 0 4h12a2 2 0 0 0 0-4z"}"></path></svg>`;
});
export {
  Component as default
};
