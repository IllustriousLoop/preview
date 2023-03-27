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
  )}><path d="${"m15.707 8.472-7.354 7.354-.707-.707 6.146-6.146H1v-1h12.793L7.646 1.825l.707-.707 7.354 7.354z"}"></path></svg>`;
});
export {
  Component as default
};
