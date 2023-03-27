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
  )}><path d="${"M351.9 256 460 193.6l-48-83.2-108 62.4V48h-96v124.8l-108-62.4-48 83.2L160.1 256 52 318.4l48 83.2 108-62.4V464h96V339.2l108 62.4 48-83.2z"}"></path></svg>`;
});
export {
  Component as default
};
