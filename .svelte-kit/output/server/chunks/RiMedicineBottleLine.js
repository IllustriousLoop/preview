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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M19 2v2h-2v3a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a3 3 0 0 1 3-3V4H5V2h14zm-2 7H7a1 1 0 0 0-1 1v10h12V10a1 1 0 0 0-1-1zm-4 2v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2h2zm2-7H9v3h6V4z"}"></path></svg>`;
});
export {
  Component as default
};
