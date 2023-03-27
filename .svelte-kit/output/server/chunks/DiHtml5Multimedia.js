import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M27.33 7.595h-5.003l-3.535 3.535h5.003zM16.021 11.13l3.535-3.535h-5.002l-3.537 3.535zm7.783 10.308H8.196V11.164l3.568-3.569H6.76L4.657 9.698v15.278h22.685V11.13h-3.538z"}"></path></svg>`;
});
export {
  Component as default
};
