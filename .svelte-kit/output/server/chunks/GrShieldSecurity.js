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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 22s-9-4-9-11V5l9-3 9 3v6c0 7-9 11-9 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-6V5m0 12v-3m-6-3h3m6 0h3M8 7l2 2m4 4 2 2m0-8-2 2m-4 4-2 2"}"></path></svg>`;
});
export {
  Component as default
};
