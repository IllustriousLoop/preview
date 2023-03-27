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
  )}><path d="${"M19 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"}"></path><path fill-rule="${"evenodd"}" d="${"M2 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H2Zm20 2H2v4h20v-4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
