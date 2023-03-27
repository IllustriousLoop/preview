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
  )}><path d="${"M12 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7.5 15.278a.778.778 0 1 1 0-1.555.778.778 0 0 1 0 1.555zM12 13H3V2h9v11z"}"></path></svg>`;
});
export {
  Component as default
};
