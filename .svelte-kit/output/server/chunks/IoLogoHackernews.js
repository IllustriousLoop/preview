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
  )}><path d="${"M64 64v384h384V64H64zm214 215v72h-40v-72l-66-120h47.1l39.7 83.6 38-83.6H342l-64 120z"}"></path></svg>`;
});
export {
  Component as default
};
