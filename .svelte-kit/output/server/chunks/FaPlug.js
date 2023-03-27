import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 384 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M320 32a32 32 0 0 0-64 0v96h64Zm48 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h16v32a160.07 160.07 0 0 0 128 156.8V512h64v-99.2A160.07 160.07 0 0 0 352 256v-32h16a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16ZM128 32a32 32 0 0 0-64 0v96h64Z"}"></path></svg>`;
});
export {
  Component as default
};
