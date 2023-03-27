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
  )}><path d="${"M433.5 96H167.2c-12.2 0-21.8 6.2-28.2 15.6L43 256l96 144.2c6.4 9.4 16 15.8 28.2 15.8h266.2c19.5 0 35.5-16 35.5-35.6V131.6C469 112 453 96 433.5 96zm-53.3 223.8-25 25.1-63.7-63.8-63.7 63.8-25-25.1 63.7-63.8-63.7-63.8 25-25.1 63.7 63.8 63.7-63.8 25 25.1-63.7 63.8 63.7 63.8z"}"></path></svg>`;
});
export {
  Component as default
};
