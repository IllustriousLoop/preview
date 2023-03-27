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
  )}><path d="${"M7.172 18.025a8 8 0 0 1 4.935-14.948l-.437 3.126a4.844 4.844 0 0 0-2.988 9.05l6.146-11.278 2.634 1.436a8 8 0 0 1-4.934 14.948l.436-3.126a4.844 4.844 0 0 0 2.988-9.05L9.806 19.46l-2.634-1.435Z"}"></path></svg>`;
});
export {
  Component as default
};
