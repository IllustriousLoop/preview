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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8 5h3v9H8v3H6v-3H3V5h3V2h2v3zM5 7v5h4V7H5zm13 3h3v9h-3v3h-2v-3h-3v-9h3V7h2v3zm-3 2v5h4v-5h-4z"}"></path></svg>`;
});
export {
  Component as default
};
