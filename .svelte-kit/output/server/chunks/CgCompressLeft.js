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
  )}><path d="${"m7.979 9.457-3.57-.003-.002 2 7 .006.006-7-2-.002L9.41 8.06 3.096 1.77 1.685 3.185l6.294 6.271Zm11.582 5.095-.008-2-7 .028.028 7 2-.008-.014-3.601 6.343 6.26 1.405-1.424-6.324-6.24 3.57-.015Z"}"></path></svg>`;
});
export {
  Component as default
};
