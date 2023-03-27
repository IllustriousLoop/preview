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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M4 4h4v2H4V4zm12 15h4v2h-4v-2zM2 9h5v2H2V9zm7 0h3v2H9V9zm5 0h6v2h-6V9zM4 14h6v2H4v-2zm8 0h3v2h-3v-2zm5 0h5v2h-5v-2zM10 4h12v2H10V4zM2 19h12v2H2v-2z"}"></path></svg>`;
});
export {
  Component as default
};
