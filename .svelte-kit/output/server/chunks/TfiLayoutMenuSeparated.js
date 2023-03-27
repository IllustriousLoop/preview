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
  )}><path d="${"M0 10h5V7H0v3zm1-2h3v1H1V8zm5 2h5V7H6v3zm1-2h3v1H7V8zm5-1v3h5V7h-5zm4 2h-3V8h3v1z"}"></path></svg>`;
});
export {
  Component as default
};
