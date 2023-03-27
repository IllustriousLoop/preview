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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M5 5.997C5 5.447 5.45 5 6.007 5h11.986C18.55 5 19 5.453 19 5.997V13H5V5.997ZM22 8v7.003c0 .55-.455.997-.992.997H2.992A.999.999 0 0 1 2 15.003V8m3 8v2-2Zm14 0v2-2Z"}"></path></svg>`;
});
export {
  Component as default
};
