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
  )}><path d="${"M14 11V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v8H0v3h16v-3h-2zm-4 2H6v-1h4v1zm3-2H3V3.002L3.002 3h9.996l.002.002V11z"}"></path></svg>`;
});
export {
  Component as default
};
