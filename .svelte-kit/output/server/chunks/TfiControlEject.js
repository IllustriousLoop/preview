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
  )}><path d="${"M8.474 2.719 2.436 10h12.135L8.474 2.719zm.004 1.562L12.429 9H4.564l3.914-4.719zM15 13v1H2v-1h13z"}"></path></svg>`;
});
export {
  Component as default
};
