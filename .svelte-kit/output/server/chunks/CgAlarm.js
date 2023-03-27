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
  )}><path d="${"M5.459 2 1 6.015 2.338 7.5l4.46-4.015L5.457 2ZM11 8h2v4h3v2h-5V8Z"}"></path><path fill-rule="${"evenodd"}" d="${"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm2 0a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"}" clip-rule="${"evenodd"}"></path><path d="${"M18.541 2 23 6.015 21.662 7.5l-4.46-4.015L18.543 2Z"}"></path></svg>`;
});
export {
  Component as default
};
