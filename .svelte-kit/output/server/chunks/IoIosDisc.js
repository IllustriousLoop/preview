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
  )}><path d="${"M256 165.8c-49.9 0-90.3 40.4-90.3 90.3s40.4 90.2 90.3 90.2 90.3-40.4 90.3-90.2c0-49.9-40.4-90.3-90.3-90.3zm0 130.6c-22.3 0-40.4-18.1-40.4-40.4s18.1-40.4 40.4-40.4 40.4 18.1 40.4 40.4-18.1 40.4-40.4 40.4z"}"></path><path d="${"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 322c-63 0-114-51.1-114-114 0-63 51.1-114 114-114s114 51 114 114-51 114-114 114z"}"></path></svg>`;
});
export {
  Component as default
};
