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
  )}><path d="${"M12 16h1.5v-6h2v6H17l-2.5 3-2.5-3ZM8 8h1.5v6h2V8H13l-2.5-3L8 8Z"}"></path></svg>`;
});
export {
  Component as default
};
