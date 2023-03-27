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
  )}><path d="${"M15 4H6V3h9v1zM6 5v1h11V5H6zM0 2h5v5H0V2zm1 4h3V3H1v3zm14 4H6v1h9v-1zm-9 3h11v-1H6v1zM0 9h5v5H0V9zm1 4h3v-3H1v3z"}"></path></svg>`;
});
export {
  Component as default
};
