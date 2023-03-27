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
  )}><path d="${"M35.9 249.3 244 129.1c5.4-3.1 12.3.6 12.3 6.7V251l211.3-121.9c5.4-3.1 12.3.6 12.3 6.7v240.3c0 6.1-6.9 9.8-12.3 6.7L256.4 261v115.2c0 6.1-6.9 9.8-12.3 6.7L35.9 262.7c-5.2-3-5.2-10.4 0-13.4z"}"></path></svg>`;
});
export {
  Component as default
};
