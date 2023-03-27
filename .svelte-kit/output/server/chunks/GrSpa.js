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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 22c1.5 0 4-1 4-5.5S12 6 12 6s-4 6-4 10.5 2.5 5.5 4 5.5Zm0 0c-1.5 0-2.953-.22-5-1.5C3 18 2.5 10 2.5 10s4.5.5 6.5 2m3 10c1.5 0 2.953-.22 5-1.5C21 18 21.5 10 21.5 10s-4.5.5-6.5 2"}"></path></svg>`;
});
export {
  Component as default
};
