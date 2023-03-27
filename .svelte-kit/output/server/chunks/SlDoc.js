import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 1024 1024" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M560 0H208c-35.344 0-64 28.656-64 64v896c0 35.344 28.656 64 64 64h608c35.344 0 64-28.656 64-64V320.016zm256 346.528V352H528V64h5.504zM208 960V64h256v352h352v544H208z"}"></path></svg>`;
});
export {
  Component as default
};
