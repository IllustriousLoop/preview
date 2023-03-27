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
  )}><path d="${"M0 5h5V0H0v5zm1-4h3v3H1V1zm5 4h5V0H6v5zm1-4h3v3H7V1zm5-1v5h5V0h-5zm4 4h-3V1h3v3zM0 11h5V6H0v5zm1-4h3v3H1V7zm5 4h5V6H6v5zm1-4h3v3H7V7zm5 4h5V6h-5v5zm1-4h3v3h-3V7zM0 17h5v-5H0v5zm1-4h3v3H1v-3zm5 4h5v-5H6v5zm1-4h3v3H7v-3zm5 4h5v-5h-5v5zm1-4h3v3h-3v-3z"}"></path></svg>`;
});
export {
  Component as default
};
