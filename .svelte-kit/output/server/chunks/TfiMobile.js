import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M12.5 0h-8C3.673 0 3 .673 3 1.5v14c0 .827.673 1.5 1.5 1.5h8c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5zm-8 1h8a.5.5 0 0 1 .5.5V3H4V1.5a.5.5 0 0 1 .5-.5zM13 4v8H4V4h9zm-.5 12h-8a.5.5 0 0 1-.5-.5V13h9v2.5a.5.5 0 0 1-.5.5zM9 14.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"}"></path></svg>`;
});
export {
  Component as default
};
