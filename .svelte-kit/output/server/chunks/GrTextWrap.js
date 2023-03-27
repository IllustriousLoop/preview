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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M17 10h7-7ZM1 14h13V2H1v12Zm5-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m11 0h7-7Zm0-4h7-7Zm0 12h7-7ZM0 18h24H0Zm0 4h24H0Zm14-8v-1l-4-5-3 3-1-1-4 4h12Z"}"></path></svg>`;
});
export {
  Component as default
};
