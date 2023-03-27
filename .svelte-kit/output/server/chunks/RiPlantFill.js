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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M21 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7h3zM5.5 2a7.49 7.49 0 0 1 6.124 3.169A7.953 7.953 0 0 0 10 10v1h-.5A7.5 7.5 0 0 1 2 3.5V2h3.5z"}"></path></svg>`;
});
export {
  Component as default
};
