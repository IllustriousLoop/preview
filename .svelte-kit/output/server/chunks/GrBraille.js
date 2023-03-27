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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm10-10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}"></path></svg>`;
});
export {
  Component as default
};
