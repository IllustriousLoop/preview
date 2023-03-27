import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M0 16h8V0H0v16zM5 2h2v2H5V2zm0 4h2v2H5V6zm0 4h2v2H5v-2zM1 2h2v2H1V2zm0 4h2v2H1V6zm0 4h2v2H1v-2zm8-5h7v1H9zm0 11h2v-4h3v4h2V7H9z"}"></path></svg>`;
});
export {
  Component as default
};
