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
  )}><path d="${"M16.5 8h-2.086l1.293-1.293a.999.999 0 1 0-1.414-1.414L10.586 9l3.707 3.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L14.414 10H16.5c1.379 0 2.5 1.346 2.5 3s-1.346 3-3 3H8c-1.654 0-3-1.346-3-3s1.346-3 3-3a1 1 0 1 0 0-2c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c2.757 0 5-2.243 5-5s-2.019-5-4.5-5z"}"></path></svg>`;
});
export {
  Component as default
};
