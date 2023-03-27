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
  )}><path d="${"M17 16v1H0v-1h17zm-5-6h2v5h1V9h-4v6h1v-5zM7 7h2v8h1V6H6v9h1V7zM2 3h2v12h1V2H1v13h1V3z"}"></path></svg>`;
});
export {
  Component as default
};
