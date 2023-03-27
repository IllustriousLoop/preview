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
  )}><path d="${"m16 9-2-4h-3V3c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v8l1 1h1.268a2 2 0 1 0 3.464 0h5.536a2 2 0 1 0 3.464 0H16V9zm-5 0V6h2.073l1.5 3H11z"}"></path></svg>`;
});
export {
  Component as default
};
