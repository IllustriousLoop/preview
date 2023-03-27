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
  )}><path d="${"M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"}"></path><path fill-rule="${"evenodd"}" d="${"M12 3C6.408 3 1.71 6.824.378 12 1.71 17.176 6.408 21 12 21c5.591 0 10.29-3.824 11.622-9C22.29 6.824 17.592 3 12 3Zm4 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
