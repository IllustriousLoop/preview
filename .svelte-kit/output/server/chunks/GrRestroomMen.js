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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M7 13.5 11 8l-1 13m7-7.5L13 8l1 13M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 3h2v5.5h-2V8Z"}"></path></svg>`;
});
export {
  Component as default
};
