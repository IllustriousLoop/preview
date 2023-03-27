import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M16.5 15.833a.671.671 0 0 1-.667.667H1.167a.672.672 0 0 1-.667-.667V1.167C.5.802.802.5 1.167.5h14.667c.364 0 .667.302.667.667v14.666zM7.833 2.5a.329.329 0 0 0-.333-.333h-5a.329.329 0 0 0-.333.333v10.667a.33.33 0 0 0 .333.333h5a.329.329 0 0 0 .333-.333V2.5zm7 0a.329.329 0 0 0-.333-.333h-5a.329.329 0 0 0-.333.333v6.667c0 .187.145.333.333.333h5a.329.329 0 0 0 .333-.333V2.5z"}"></path></svg>`;
});
export {
  Component as default
};
