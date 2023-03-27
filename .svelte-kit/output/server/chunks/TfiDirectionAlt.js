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
  )}><path d="${"M9 6h4.695l1.938-2.563L13.687 1H9V0H8v1H2v5h6v2H3.313l-1.946 2.437L3.305 13H8v4h1v-4h6V8H9V6zM3 2h10.206l1.161 1.454L13.198 5H3V2zm11 10H3.802l-1.169-1.546L3.794 9H14v3z"}"></path></svg>`;
});
export {
  Component as default
};
