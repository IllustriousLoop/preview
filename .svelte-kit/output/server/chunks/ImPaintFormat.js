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
  )}><path d="${"M16 9V3h-3V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V4h2v4H6v2h-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H7V9h9zm-4-6H1V2h11v1z"}"></path></svg>`;
});
export {
  Component as default
};
