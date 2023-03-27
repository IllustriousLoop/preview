import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8.315 0H2.382v6.022h5.933V3.506l9.618 8.45-9.618 8.538V8.99H2.382V24h5.933l13.303-12.045Z"}"></path></svg>`;
});
export {
  Component as default
};
