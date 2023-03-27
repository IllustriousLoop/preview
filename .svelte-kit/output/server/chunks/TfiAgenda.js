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
  )}><path d="${"M14 2V0H1v17h13v-2h2V2h-2zM2 16V1h2v15H2zm11 0H5V1h8v15zm2-2h-1v-3h1v3zm0-4h-1V7h1v3zm-1-4V3h1v3h-1zM6 4h5v1H6V4zm0 2h4v1H6V6z"}"></path></svg>`;
});
export {
  Component as default
};
