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
  )}><path d="${"M3 15h4V2H3v13zM4 3h2v11H4V3zm6-1v13h4V2h-4zm3 12h-2V3h2v11z"}"></path></svg>`;
});
export {
  Component as default
};
