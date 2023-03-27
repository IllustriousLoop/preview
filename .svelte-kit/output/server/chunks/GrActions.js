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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0-11V1m0 22v-5.5M1 12h5.5m11 0H23M4.437 4.437l4.125 4.125m6.876 6.876 4.124 4.124m0-15.125-4.125 4.125m-6.874 6.876-4.126 4.124"}"></path></svg>`;
});
export {
  Component as default
};
