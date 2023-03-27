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
  )}><path d="${"M6.546 12 12 6.545 17.455 12l-5.454 5.454zm16.976-1.154L13.158.48a1.635 1.635 0 0 0-2.314 0L.478 10.846a1.629 1.629 0 0 0 0 2.305l10.37 10.372a1.629 1.629 0 0 0 2.304 0l10.37-10.372a1.629 1.629 0 0 0 0-2.305zM12 20.726l-8.727-8.728L12 3.27l8.727 8.728z"}"></path></svg>`;
});
export {
  Component as default
};
