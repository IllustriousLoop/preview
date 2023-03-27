import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M256 22.127 238.562 57h34.875L256 22.127zM233 75v268h46V75h-46zm-16 286v14h78v-14h-78zm-17.193 32-13.43 94h139.246l-13.428-94H199.807z"}"></path></svg>`;
});
export {
  Component as default
};
