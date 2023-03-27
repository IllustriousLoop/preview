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
  )}><path fill-rule="${"evenodd"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M2 24V2c8-3.524 11 4.644 20 0v12c-8 4.895-13-4.103-20 0"}"></path></svg>`;
});
export {
  Component as default
};
