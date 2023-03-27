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
  )}><path d="${"M16 2v15H1V2h2.244v1H2v13h13V3h-1.278V2H16zm-3 3H4V1h3.085c.207-.582.763-1 1.415-1s1.208.418 1.415 1H13v4zm-1-3H9v-.5a.5.5 0 0 0-1 0V2H5v2h7V2z"}"></path></svg>`;
});
export {
  Component as default
};
