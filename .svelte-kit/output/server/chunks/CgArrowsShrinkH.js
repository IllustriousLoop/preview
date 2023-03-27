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
  )}><path d="${"M1 7h2v10H1V7Zm7.448.757 1.414 1.415L8.033 11h7.933l-1.828-1.828 1.414-1.415L19.795 12l-4.243 4.243-1.414-1.415L15.966 13H8.034l1.828 1.828-1.414 1.415L4.205 12l4.243-4.243ZM23 7h-2v10h2V7Z"}"></path></svg>`;
});
export {
  Component as default
};
