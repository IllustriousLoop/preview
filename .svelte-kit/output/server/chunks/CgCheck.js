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
  )}><path d="${"m10.586 13.414-2.829-2.828L6.343 12l4.243 4.243 7.07-7.071-1.413-1.415-5.657 5.657Z"}"></path></svg>`;
});
export {
  Component as default
};
