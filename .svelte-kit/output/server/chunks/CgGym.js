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
  )}><path d="${"m20.274 9.869-3.442-4.915 1.639-1.147 3.441 4.915-1.638 1.147Zm-1.884 2.54L16.67 9.95l-8.192 5.736 1.72 2.457-1.638 1.148-4.588-6.554L5.61 11.59l1.72 2.458 8.192-5.736-1.72-2.458 1.638-1.147 4.588 6.553-1.638 1.148Zm2.375-5.326 1.638-1.147-1.147-1.638-1.638 1.147 1.147 1.638ZM7.168 19.046l-3.442-4.915-1.638 1.147 3.441 4.915 1.639-1.147Zm-2.786-.491-1.638 1.147-1.147-1.638 1.638-1.147 1.147 1.638Z"}"></path></svg>`;
});
export {
  Component as default
};
