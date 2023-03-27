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
  )}><path d="${"M16.243 6.343a1 1 0 1 1 1.414 1.414l-9.9 9.9a1 1 0 0 1-1.414-1.414l9.9-9.9ZM9.879 9.879A2 2 0 1 1 7.05 7.05a2 2 0 0 1 2.83 2.83Zm4.242 7.071a2 2 0 1 0 2.829-2.829 2 2 0 0 0-2.829 2.829Z"}"></path></svg>`;
});
export {
  Component as default
};
