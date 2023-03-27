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
  )}><path d="${"m12.032 1.019 4.21 4.274-1.424 1.404-1.799-1.826-.051 16.11h1.996v2h-6v-2h2.004l.051-16.157-1.858 1.83-1.403-1.425 4.274-4.21Z"}"></path></svg>`;
});
export {
  Component as default
};
