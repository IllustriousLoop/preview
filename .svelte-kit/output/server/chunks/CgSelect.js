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
  )}><path d="${"m6 9.657 1.414 1.414 4.243-4.243 4.242 4.243 1.415-1.414L11.657 4 6 9.657Zm0 4.786 1.414-1.414 4.243 4.243 4.242-4.243 1.415 1.414-5.657 5.657L6 14.443Z"}"></path></svg>`;
});
export {
  Component as default
};
