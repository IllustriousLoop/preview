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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M7 11V6c0-3 2-5 5-5s5 2 5 5v5m-5 12a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-8v4m0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}"></path></svg>`;
});
export {
  Component as default
};
