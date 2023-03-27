import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#00BCD4"}" d="${"M33.7 5 22 17l15 5-15.7 14.7 5.1 2.8L12 43l2.7-14.8 2.9 5.1L27 24l-15-5L25 5h8.7z"}"></path></svg>`;
});
export {
  Component as default
};
