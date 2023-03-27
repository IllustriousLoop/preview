import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M1 4v6h15V4H1zm14 5H2V5h13v4zm-1 2v1H3v-1h11zM2 13h13v1H2v-1z"}"></path></svg>`;
});
export {
  Component as default
};
