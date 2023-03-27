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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z"}"></path><path d="${"M13 16h-2v2h2zm0-6h-2v5h2z"}"></path></svg>`;
});
export {
  Component as default
};
