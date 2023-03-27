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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3 5v14h18V5H3zm16 6h-3.33V7H19v4zm-5.33 0h-3.33V7h3.33v4zM8.33 7v4H5V7h3.33zM5 17v-4h3.33v4H5zm5.33 0v-4h3.33v4h-3.33zm5.34 0v-4H19v4h-3.33z"}"></path></svg>`;
});
export {
  Component as default
};
