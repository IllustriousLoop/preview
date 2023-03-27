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
  )}><path d="${"M22.59 16.322a1.41 1.41 0 1 1 0-2.82 1.41 1.41 0 0 1 0 2.82zM.15 19.827a1.41 1.41 0 0 0 2.52 1.268S10.52 5.083 16.926 4.946c4.23-.09 4.232 5.642 4.232 5.642a1.41 1.41 0 1 0 2.82 0s.057-8.381-7.02-8.457C8.764 1.871.152 19.827.152 19.827z"}"></path></svg>`;
});
export {
  Component as default
};
