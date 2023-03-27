import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m20.708 4.412-10.25 10.287h3.59v2h-7v-7h2v3.58L19.293 3l1.416 1.412Z"}"></path><path d="${"M11 4.706v2H5v12h12v-6h2v8H3v-16h8Z"}"></path></svg>`;
});
export {
  Component as default
};
