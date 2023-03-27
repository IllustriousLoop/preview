import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M13.5 11c-.706 0-1.342.293-1.797.763L4.969 8.396a2.46 2.46 0 0 0 0-.792l6.734-3.367a2.5 2.5 0 1 0-.672-1.341L4.297 6.263a2.5 2.5 0 1 0 0 3.474l6.734 3.367A2.5 2.5 0 1 0 13.5 11z"}"></path></svg>`;
});
export {
  Component as default
};
