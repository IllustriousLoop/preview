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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}"></path></svg>`;
});
export {
  Component as default
};
