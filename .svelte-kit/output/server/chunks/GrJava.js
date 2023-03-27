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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M1 18V9h16v9c0 4-2 5-8 5s-8-1-8-5Zm16-9v3a3 3 0 1 0 3-3h-3Zm-4-3V2M5 6V4m4 2V0"}"></path></svg>`;
});
export {
  Component as default
};
