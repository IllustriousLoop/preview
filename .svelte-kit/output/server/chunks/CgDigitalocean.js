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
  )}><path d="${"M12 6a6 6 0 0 0-6 6H1C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11v-5a6 6 0 0 0 0-12Z"}"></path><path d="${"M7 18v-5h5v5H7Zm-4 0v4h4v-4H3Zm0 0H1v-2h2v2Z"}"></path></svg>`;
});
export {
  Component as default
};
