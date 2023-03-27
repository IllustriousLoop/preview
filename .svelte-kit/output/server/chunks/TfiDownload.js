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
  )}><path d="${"M17 16v1H0v-1h17zm-3.646-7.146-.707-.707-3.646 3.646V0h-1v11.794L4.354 8.146l-.708.708L8.5 13.707l4.854-4.853z"}"></path></svg>`;
});
export {
  Component as default
};
