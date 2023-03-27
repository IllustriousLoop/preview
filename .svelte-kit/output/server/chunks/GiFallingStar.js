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
  )}><path d="${"m166.4 25.64-12.8 12.72 160 160.04 12.8-12.8-160-159.96zm-32 95.96L128 128l-6.4 6.4 160 160 12.8-12.8-160-160zm-96.08 32L25.6 166.4l160 160 12.8-12.8-160.08-160zm314.78 86.6-29.4 84.1-85.4 26 71 54-1.7 89.2 73.2-50.8 84.4 29.1-25.7-85.3 53.8-71.2-89.1-2-51.1-73.1z"}"></path></svg>`;
});
export {
  Component as default
};
