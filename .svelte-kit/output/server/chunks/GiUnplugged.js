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
  )}><path d="${"M196 136c-61.174 0-111.656 45.834-119.063 105H16v30h60.938C84.344 330.166 134.825 376 196 376h15c8.31 0 15-6.69 15-15v-30h45v-30h-45v-90h45v-30h-45v-30c0-8.31-6.69-15-15-15h-15zm210 0c-8.31 0-15 6.69-15 15v30h30v30h-30v90h30v30h-30v30c0 8.31 6.69 15 15 15h90V136h-90z"}"></path></svg>`;
});
export {
  Component as default
};
