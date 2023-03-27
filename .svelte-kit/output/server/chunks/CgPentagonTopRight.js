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
  )}><path fill-rule="${"evenodd"}" d="${"M10.33 15.16 5 14.392l5-8.66 5.33.768 3.33 4.232-5 8.66-3.33-4.232Zm3.075.674-1.998-2.54-3.198-.46 2.846-4.93 3.198.461 1.998 2.54-2.846 4.929Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
