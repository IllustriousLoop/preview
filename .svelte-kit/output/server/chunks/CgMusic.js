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
  )}><path fill-rule="${"evenodd"}" d="${"M22 6a4 4 0 0 0-4.608-3.953l-7 1.077A4 4 0 0 0 7 7.078v8.763a3.5 3.5 0 1 0 2 3.163V7.078A2 2 0 0 1 10.696 5.1l7-1.077A2 2 0 0 1 20 6.001v6.84a3.5 3.5 0 1 0 2 3.163V6.001Zm-2 10.004a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-13 3a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
