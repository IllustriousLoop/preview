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
  )}><circle cx="${"12"}" cy="${"4"}" r="${"2"}"></circle><path d="${"M15 22V9h5V7H4v2h5v13h2v-7h2v7z"}"></path></svg>`;
});
export {
  Component as default
};
