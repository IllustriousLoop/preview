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
  )}><path d="${"M131.3 231.1 32 330.6l99.3 99.4v-74.6h174.5v-49.7H131.3v-74.6zM480 181.4 380.7 82v74.6H206.2v49.7h174.5v74.6l99.3-99.5z"}"></path></svg>`;
});
export {
  Component as default
};
