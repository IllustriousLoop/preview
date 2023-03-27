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
  )}><path d="${"M19 21h2V3h-2v18ZM5 21H3V3h2v18Z"}"></path><path fill-rule="${"evenodd"}" d="${"M9.464 16.048 9.953 15h4.094l.489 1.048a1 1 0 1 0 1.813-.845l-3.381-7.25A1 1 0 0 0 12 7.375a1 1 0 0 0-.967.576l-3.381 7.25a1 1 0 0 0 1.812.846ZM12 10.61 10.885 13h2.23L12 10.61Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
