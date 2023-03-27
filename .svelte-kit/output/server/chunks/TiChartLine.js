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
  )}><path d="${"M4.75 15.561a2 2 0 0 0 2.811-.313l2.789-3.486L12.8 13.6a2 2 0 0 0 2.762-.352l4-5a2 2 0 0 0-3.124-2.499l-2.789 3.486L11.2 7.4a2 2 0 0 0-2.762.35l-4 5a2.001 2.001 0 0 0 .312 2.811zM5 21h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2z"}"></path></svg>`;
});
export {
  Component as default
};
