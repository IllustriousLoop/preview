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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M16.125 2.42a2.009 2.009 0 0 1 2.84-.001l2.616 2.617a2 2 0 0 1-.001 2.839l-3.705 3.705a2.009 2.009 0 0 1-2.84.001L12.42 8.964a2 2 0 0 1 .001-2.839l3.705-3.705Zm-10 10a2.009 2.009 0 0 1 2.84-.001l2.616 2.617a2 2 0 0 1-.001 2.839L7.875 21.58a2.009 2.009 0 0 1-2.84.001L2.42 18.964a2 2 0 0 1 .001-2.839l3.705-3.705ZM7 17 17 7"}"></path></svg>`;
});
export {
  Component as default
};
