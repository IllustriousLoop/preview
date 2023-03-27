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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M7 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm10.5 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1a4.5 4.5 0 0 1 4.5 4.5v.5h-9v-.5a4.5 4.5 0 0 1 4.5-4.5zM7 12a5 5 0 0 1 5 5v4H2v-4a5 5 0 0 1 5-5z"}"></path></svg>`;
});
export {
  Component as default
};
