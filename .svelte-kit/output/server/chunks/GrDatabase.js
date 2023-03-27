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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M1 2h22v7H1V2Zm3 10h1v1H4v-1Zm0-7h1v1H4V5Zm0 14h1v1H4v-1Zm-3-3h22v7H1v-7Zm0-7h22v7H1V9Z"}"></path></svg>`;
});
export {
  Component as default
};
