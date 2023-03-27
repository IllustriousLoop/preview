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
  )}><path d="${"M.46 3.06h23.08v2.18H.46zM4.1 8.29h15.81v2.18H4.1zM.46 13.53h23.08v2.18H.46zm3.64 5.23h15.81v2.18H4.1z"}"></path></svg>`;
});
export {
  Component as default
};
