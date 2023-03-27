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
  )}><path d="${"M5 7.414 6.414 6l5.657 5.657L17.728 6l1.414 1.414-7.07 7.071L5 7.415Zm14 8.929H5v2h14v-2Z"}"></path></svg>`;
});
export {
  Component as default
};
