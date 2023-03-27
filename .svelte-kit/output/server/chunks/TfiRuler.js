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
  )}><path d="${"M5 0v17h7V0H5zm6 16H6v-.984h2v-1H6V13h1v-1H6v-1h2v-1H6v-.984h1v-1H6v-1h2v-1H6V5h1V4H6V3h2V2H6V1h5v15z"}"></path></svg>`;
});
export {
  Component as default
};
