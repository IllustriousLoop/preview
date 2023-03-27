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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3 13v7h18v-1.5l-9-7L8 17l-5-4zm0-6 4 3 5-7 5 4h4v8.97l-9.4-7.31-3.98 5.48L3 10.44V7z"}"></path></svg>`;
});
export {
  Component as default
};
