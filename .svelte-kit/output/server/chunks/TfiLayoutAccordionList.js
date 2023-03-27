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
  )}><path d="${"M4 0v9h13V0H4zm12 8H5V1h11v7zM0 3h3V0H0v3zm1-2h1v1H1V1zm3 12h13v-3H4v3zm1-2h11v1H5v-1zm-5 2h3v-3H0v3zm1-2h1v1H1v-1zm3 6h13v-3H4v3zm1-2h11v1H5v-1zm-5 2h3v-3H0v3zm1-2h1v1H1v-1z"}"></path></svg>`;
});
export {
  Component as default
};
