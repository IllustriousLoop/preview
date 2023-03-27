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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"m6.5 10.5 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6Zm0-6 5.5 3 5.5-3m-5.5 3v6-6Zm-11 12 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6Zm0-6 5.5 3 5.5-3m-5.5 3v6-6Zm5.5 3 5.5 3 5.5-3v-6l-5.5-3-5.5 3v6Zm0-6 5.5 3 5.5-3m-5.5 3v6-6Z"}"></path></svg>`;
});
export {
  Component as default
};
