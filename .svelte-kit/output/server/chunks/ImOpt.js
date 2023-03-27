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
  )}><path d="${"M14.5 13h-4a.499.499 0 0 1-.457-.297L6.175 4H1.5a.5.5 0 0 1 0-1h5c.198 0 .377.116.457.297L10.825 12H14.5a.5.5 0 0 1 0 1zm0-9h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1z"}"></path></svg>`;
});
export {
  Component as default
};
