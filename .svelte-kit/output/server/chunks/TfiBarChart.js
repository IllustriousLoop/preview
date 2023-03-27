import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M17 16v1H0v-1h17zM2 10h2v5h1V9H1v6h1v-5zm5-3h2v8h1V6H6v9h1V7zm5-4h2v12h1V2h-4v13h1V3z"}"></path></svg>`;
});
export {
  Component as default
};
