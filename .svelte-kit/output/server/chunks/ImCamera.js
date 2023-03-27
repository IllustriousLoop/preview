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
  )}><path d="${"M4.75 9.5a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0zM15 4h-3.5c-.25-1-.5-2-1.5-2H6C5 2 4.75 3 4.5 4H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-7 9.938a4.438 4.438 0 1 1 0-8.876 4.438 4.438 0 0 1 0 8.876zM15 7h-2V6h2v1z"}"></path></svg>`;
});
export {
  Component as default
};
