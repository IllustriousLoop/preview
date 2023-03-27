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
  )}><path d="${"M16.497 5H14V4h2.497v1zm-.998 2.996H14v1h1.499v-1zm-1.495-1.998v1H17v-1h-2.996zM14 10.993h2.996v-1H14v1zM14 13h2.497v-1H14v1zM0 4h13v9H0V4zm1 8h11V5H1v7z"}"></path></svg>`;
});
export {
  Component as default
};
