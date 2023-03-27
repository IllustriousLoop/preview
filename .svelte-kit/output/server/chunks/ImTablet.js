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
  )}><path d="${"M12.5 0h-10C1.675 0 1 .675 1 1.5v13c0 .825.675 1.5 1.5 1.5h10c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zm-5 15.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM12 14H3V2h9v12z"}"></path></svg>`;
});
export {
  Component as default
};
