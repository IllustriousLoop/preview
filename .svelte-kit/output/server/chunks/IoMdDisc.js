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
  )}><path d="${"M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm0 301.6c-51.8 0-93.6-41.8-93.6-93.6s41.8-93.6 93.6-93.6 93.6 41.8 93.6 93.6-41.8 93.6-93.6 93.6zm0-114.4c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8 20.8-9.4 20.8-20.8-9.4-20.8-20.8-20.8z"}"></path></svg>`;
});
export {
  Component as default
};
