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
  )}><path fill-rule="${"evenodd"}" d="${"M2 2 1 3v3l1 1h12l1-1V3l-1-1H2zm0 1h12v3H2V3zm-1 7 1-1h3l1 1v3l-1 1H2l-1-1v-3zm2 0H2v3h3v-3H3zm7 0 1-1h3l1 1v3l-1 1h-3l-1-1v-3zm2 0h-1v3h3v-3h-2z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
