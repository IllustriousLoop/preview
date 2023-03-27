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
  )}><path d="${"M16.365 0a.597.597 0 0 0-.555.352.582.582 0 0 0 .128.635l4.985 4.996a.605.605 0 0 0 .635.133.59.59 0 0 0 .363-.53V.577A.605.605 0 0 0 21.335 0zM2.661 0a.59.59 0 0 0-.582.59v22.82a.59.59 0 0 0 .582.59h18.67a.59.59 0 0 0 .59-.59V8.716a.59.59 0 0 0-.17-.42L13.674.182a.59.59 0 0 0-.42-.181zm.59 1.184h9.754l7.733 7.77v13.863H3.251z"}"></path></svg>`;
});
export {
  Component as default
};
