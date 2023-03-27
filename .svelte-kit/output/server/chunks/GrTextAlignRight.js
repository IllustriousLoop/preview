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
  )}><path d="${"M.46 3.06h23.08v2.18H.46zm7.27 5.23h15.81v2.18H7.73zM.46 13.53h23.08v2.18H.46zm7.27 5.23h15.81v2.18H7.73z"}"></path></svg>`;
});
export {
  Component as default
};
