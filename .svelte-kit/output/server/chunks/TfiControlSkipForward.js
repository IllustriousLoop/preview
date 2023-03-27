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
  )}><path d="${"m3 14.571 7.281-6.097L3 2.436v12.135zM4 4.564l4.719 3.914L4 12.429V4.564zM14 2v13h-1V2h1z"}"></path></svg>`;
});
export {
  Component as default
};
