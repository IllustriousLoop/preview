import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#90CAF9"}" d="${"M36 13V9H22v13h-9v4h9v13h14v-4H26v-9h10v-4H26v-9z"}"></path><path fill="${"#D81B60"}" d="${"M6 17h10v14H6z"}"></path><path fill="${"#2196F3"}" d="${"M32 6h10v10H32zm0 26h10v10H32zm0-13h10v10H32z"}"></path></svg>`;
});
export {
  Component as default
};
