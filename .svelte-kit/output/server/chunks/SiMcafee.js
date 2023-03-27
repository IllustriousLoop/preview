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
  )}><path d="${"M12 4.823 1.58 0v19.177L12 24l10.42-4.823V0zm6.172 11.626-6.143 2.843-6.144-2.843V6.69l6.144 2.842 6.143-2.842z"}"></path></svg>`;
});
export {
  Component as default
};
