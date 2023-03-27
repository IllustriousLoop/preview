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
  )}><path d="${"M13 1H0v11h13V1zm-1 10H1V2h11v9zm5-6v11H4v-3.031h1V15h11V6h-2.016V5H17z"}"></path></svg>`;
});
export {
  Component as default
};
