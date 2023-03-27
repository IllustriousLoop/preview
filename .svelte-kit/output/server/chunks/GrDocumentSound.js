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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M2.998 9V1H17.5L21 4.5V23h-3M16 1v5h5M1 14.01v4h3l4 3V11l-4 3.01H1ZM11 18a2 2 0 1 0 0-4m0 8a6 6 0 1 0 0-12"}"></path></svg>`;
});
export {
  Component as default
};
