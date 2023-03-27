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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M18 4V0v4ZM7 18H5h2Zm12 0H9h10ZM7 14H5h2Zm12 0H9h10ZM6 4V0v4ZM1 9h22H1Zm0 14h22V4H1v19Z"}"></path></svg>`;
});
export {
  Component as default
};
