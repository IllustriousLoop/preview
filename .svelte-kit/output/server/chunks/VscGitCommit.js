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
  )}><path d="${"M10.979 5a3.42 3.42 0 0 0-2-1V0h-1v4a3.5 3.5 0 0 0-.18 6.89h.18v4h1v-4a3.08 3.08 0 0 0 .84-.23 3.42 3.42 0 0 0 1.57-1.29 3.46 3.46 0 0 0-.41-4.37zm-.7 4.24a2.51 2.51 0 0 1-3.159.31 2.5 2.5 0 0 1-.92-1.12 2.49 2.49 0 0 1 1.82-3.41 2.72 2.72 0 0 1 .49 0 2.5 2.5 0 0 1 2.54 2.5 2.51 2.51 0 0 1-.8 1.75l.03-.03z"}"></path></svg>`;
});
export {
  Component as default
};
