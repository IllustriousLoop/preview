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
  )}><path fill="${"#FFC107"}" d="${"M33 22h-9.4L30 5H19l-6 21h8.6L17 45z"}"></path><path fill="${"#F44336"}" d="${"M40.8 14.5h-4.3l-.9 2.5H33l4.5-12h2.3l4.5 12h-2.6l-.9-2.5zm-3.7-2h3L38.6 8l-1.5 4.5z"}"></path></svg>`;
});
export {
  Component as default
};
