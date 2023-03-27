import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M7 12.119V16l-6-6 6-6v3.966c6.98.164 6.681-4.747 4.904-7.966C16.29 4.741 15.359 12.337 7 12.119z"}"></path></svg>`;
});
export {
  Component as default
};
