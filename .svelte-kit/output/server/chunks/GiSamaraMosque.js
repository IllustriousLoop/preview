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
  )}><path d="${"m269 54.7-28 4.87v34.12l28-5.7V54.7zm16.5 48.3L225 115.4v33.1l60.5-15.1V103zm25.5 42.5L201 173v31.1l110-18.4v-40.2zm32 53.1-174 29v46.2l174-21.7v-53.5zm32 67.6-238 29.7v59l238-23.8v-64.9zm32 79.7-302 30.2V439h302v-93.1zM41 457v30h78v-30H41zm96 0v30h110v-30H137zm128 0v30h110v-30H265zm128 0v30h78v-30h-78z"}"></path></svg>`;
});
export {
  Component as default
};
