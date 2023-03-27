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
  )}><path fill="${"#42A5F5"}" d="${"M39 45H9s-3-.1-3-8h36c0 7.9-3 8-3 8z"}"></path><path fill="${"#90CAF9"}" d="${"M8 3h32v34H8z"}"></path><path fill="${"#1976D2"}" d="${"M18 15h16v2H18zm0 4h16v2H18zm0 4h16v2H18zm0 4h16v2H18zm0 4h16v2H18zm-4-16h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"}"></path></svg>`;
});
export {
  Component as default
};
