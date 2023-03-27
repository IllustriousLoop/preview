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
  )}><path d="${"M13 4.009a1 1 0 1 0-2 0l-.003 8.003a1 1 0 0 0 2 0L13 4.01Z"}"></path><path d="${"M4 12.992c0-2.21.895-4.21 2.343-5.657l1.414 1.414a6 6 0 1 0 8.485 0l1.415-1.414A8 8 0 1 1 4 12.992Z"}"></path></svg>`;
});
export {
  Component as default
};
