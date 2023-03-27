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
  )}><path d="${"M0 0h5v5H0V0zm6 5h5V0H6v5zm6-5v5h5V0h-5zM0 11h5V6H0v5zm6 0h5V6H6v5zm6 0h5V6h-5v5zM0 17h5v-5H0v5zm6 0h5v-5H6v5zm6 0h5v-5h-5v5z"}"></path></svg>`;
});
export {
  Component as default
};
