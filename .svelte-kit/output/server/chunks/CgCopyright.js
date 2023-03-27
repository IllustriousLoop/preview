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
  )}><path d="${"m13.392 10.436 1.419-1.418a4 4 0 1 0 .176 5.798l-1.313-1.313h-.21a2 2 0 1 1-.073-3.067Z"}"></path><path fill-rule="${"evenodd"}" d="${"M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
