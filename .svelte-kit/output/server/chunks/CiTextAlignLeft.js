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
  )}><path d="${"M20.438 4.063H3.563a.5.5 0 1 1 0-1h16.875a.5.5 0 1 1 0 1ZM12.562 8.5h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1Zm0 8h-9a.5.5 0 1 1 0-1h9a.5.5 0 0 1 0 1Zm7.874-4H3.562a.5.5 0 1 1 0-1h16.874a.5.5 0 0 1 0 1Zm0 8.437H3.562a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1Z"}" data-name="${"Text Align Left"}"></path></svg>`;
});
export {
  Component as default
};
