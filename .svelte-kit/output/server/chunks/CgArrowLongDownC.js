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
  )}><path fill-rule="${"evenodd"}" d="${"M11 6.85a3.001 3.001 0 1 1 2 0l.012 12.287 1.812-1.822 1.419 1.41-4.231 4.255-4.255-4.23 1.41-1.42 1.845 1.835L11 6.85Zm.998-1.83a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
