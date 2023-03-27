import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M18 4H8a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM5 19v-9h8.5c.275 0 .5.225.5.5V19H5zm13-3h-3v-5.5c0-.827-.673-1.5-1.5-1.5H8V6h10v10z"}"></path></svg>`;
});
export {
  Component as default
};
