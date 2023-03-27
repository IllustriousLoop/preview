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
  )}><path d="${"M14 4V2H0v11a1 1 0 0 0 1 1h13.5a1.5 1.5 0 0 0 1.5-1.5V4h-2zm-1 9H1V3h12v10zM2 5h10v1H2zm6 2h4v1H8zm0 2h4v1H8zm0 2h3v1H8zM2 7h5v5H2z"}"></path></svg>`;
});
export {
  Component as default
};
