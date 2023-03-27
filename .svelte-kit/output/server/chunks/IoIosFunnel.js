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
  )}><path d="${"M48 87.2c0 5.8 2 11.4 5.6 15.7l152.2 179.8c3.6 4.3 5.6 9.9 5.6 15.7v107c0 10 5.9 18.8 14.6 22l55 19.8c9.6 3.5 19.6-4.3 19.6-15.3V298.3c0-5.8 2-11.4 5.6-15.7l152.2-179.8c3.6-4.3 5.6-9.9 5.6-15.7 0-12.8-9.6-23.2-21.4-23.2H69.4C57.6 64 48 74.4 48 87.2z"}"></path></svg>`;
});
export {
  Component as default
};
