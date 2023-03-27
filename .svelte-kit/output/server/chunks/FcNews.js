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
  )}><path fill="${"#FF5722"}" d="${"M32 15v28H10c-2.2 0-4-1.8-4-4V15h26z"}"></path><path fill="${"#FFCCBC"}" d="${"M14 5v34c0 2.2-1.8 4-4 4h29c2.2 0 4-1.8 4-4V5H14z"}"></path><path fill="${"#FF5722"}" d="${"M20 10h18v4H20zm0 7h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8z"}"></path></svg>`;
});
export {
  Component as default
};
