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
  )}><path fill="${"#FFC107"}" d="${"M33 22h-9.4L30 5H19l-6 21h8.6L17 45z"}"></path><path fill="${"#37474F"}" d="${"M3.563 6.396 6.39 3.568l37.966 37.966-2.828 2.828z"}"></path></svg>`;
});
export {
  Component as default
};
