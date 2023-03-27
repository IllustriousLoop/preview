import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M96 64 64 96l48 48-48 48h128V64l-48 48-48-48zm224 0v128h128l-48-48 48-48-32-32-48 48-48-48zM64 320l48 48-48 48 32 32 48-48 48 48V320H64zm256 0v128l48-48 48 48 32-32-48-48 48-48H320z"}"></path></svg>`;
});
export {
  Component as default
};
