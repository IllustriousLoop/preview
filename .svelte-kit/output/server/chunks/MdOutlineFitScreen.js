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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0V0z"}"></path><path d="${"M6 16h12V8H6v8zm2-6h8v4H8v-4zm-4 5H2v3c0 1.1.9 2 2 2h3v-2H4v-3zm0-9h3V4H4c-1.1 0-2 .9-2 2v3h2V6zm16-2h-3v2h3v3h2V6c0-1.1-.9-2-2-2zm0 14h-3v2h3c1.1 0 2-.9 2-2v-3h-2v3z"}"></path></svg>`;
});
export {
  Component as default
};
