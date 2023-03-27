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
  )}><path d="${"M20 7H4V5h16v2Zm0 4h-8V9h8v2Zm-8 4h8v-2h-8v2ZM9 9l-5 3 5 3V9Zm-5 8v2h16v-2H4Z"}"></path></svg>`;
});
export {
  Component as default
};
