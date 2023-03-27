import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M2 6a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1H8a3 3 0 0 0-3 3v1.5a1.5 1.5 0 0 1-3 0V6z"}" clip-rule="${"evenodd"}"></path><path d="${"M6 12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2h2a2 2 0 0 0 2-2v-2z"}"></path></svg>`;
});
export {
  Component as default
};
