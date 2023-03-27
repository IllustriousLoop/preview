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
  )}><path d="${"M256 231.358c-13.442 0-24.643 11.2-24.643 24.642s11.2 24.643 24.643 24.643 24.643-11.2 24.643-24.643-11.201-24.642-24.643-24.642zM256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm49.284 273.284L121.6 390.4l85.116-183.679L390.4 121.6l-85.116 183.684z"}"></path></svg>`;
});
export {
  Component as default
};
