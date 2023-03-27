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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M3 18h18V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13Zm-1 2h20c1 0 1-1 1-1H1s0 1 1 1Z"}"></path></svg>`;
});
export {
  Component as default
};
