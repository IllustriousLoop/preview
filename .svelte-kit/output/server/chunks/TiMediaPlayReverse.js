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
  )}><path d="${"M14 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6C10 8.1 6 12 6 12s4 3.9 6.6 6.4c.4.4.9.6 1.4.6z"}"></path></svg>`;
});
export {
  Component as default
};
