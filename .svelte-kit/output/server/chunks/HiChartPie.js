import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M2 10a8 8 0 0 1 8-8v8h8a8 8 0 1 1-16 0z"}"></path><path d="${"M12 2.252A8.014 8.014 0 0 1 17.748 8H12V2.252z"}"></path></svg>`;
});
export {
  Component as default
};
