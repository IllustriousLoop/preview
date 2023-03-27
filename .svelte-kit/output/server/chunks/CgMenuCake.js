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
  )}><path d="${"M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 2a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Zm-1 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"}"></path></svg>`;
});
export {
  Component as default
};
