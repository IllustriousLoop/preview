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
  )}><path d="${"M18.783 0H24v12h-5.217V0zm-6.261 5h5.217v7h-5.217V5zM6.26 5h5.217v7H6.261V5zM24 24H0V0h5.217v19h13.566v-1H6.26v-5H24v11Z"}"></path></svg>`;
});
export {
  Component as default
};
