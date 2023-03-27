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
  )}><path d="${"M1.927 23.935a2.4 2.4 0 0 1-1.882-1.883 2.4 2.4 0 0 1 2.82-2.82 2.4 2.4 0 0 1 1.882 1.882 2.4 2.4 0 0 1-2.82 2.82zM21.135 4.768a2.4 2.4 0 0 1-1.882-1.882 2.4 2.4 0 0 1 2.82-2.82 2.4 2.4 0 0 1 1.882 1.882 2.4 2.4 0 0 1-2.82 2.82zM12.021 6.01c1.147 0 2.219.324 3.13.883l2.585-2.585A9.583 9.583 0 0 0 4.328 17.716l2.586-2.586a5.99 5.99 0 0 1 5.107-9.12zm5.107 2.86a5.99 5.99 0 0 1-8.237 8.237l-2.586 2.585A9.583 9.583 0 0 0 19.713 6.284Z"}"></path></svg>`;
});
export {
  Component as default
};
