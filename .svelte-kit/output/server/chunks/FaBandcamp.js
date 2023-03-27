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
  )}><path d="${"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8Zm48.2 326.1h-181L207.9 178h181Z"}"></path></svg>`;
});
export {
  Component as default
};
