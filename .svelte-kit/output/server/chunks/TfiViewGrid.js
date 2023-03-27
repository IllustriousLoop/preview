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
  )}><path d="${"M0 7h7V0H0v7zm1-6h5v5H1V1zm9-1v7h7V0h-7zm6 6h-5V1h5v5zM0 17h7v-7H0v7zm1-6h5v5H1v-5zm9 6h7v-7h-7v7zm1-6h5v5h-5v-5z"}"></path></svg>`;
});
export {
  Component as default
};
