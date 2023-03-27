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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M7 19h1v-1H7v1Zm11 0h1v-1h-1v1ZM1 23h11V1H1v22Zm11 0h11V1H12v22ZM4 5h5-5Zm11 0h5-5ZM4 9h5-5Zm11 0h5-5ZM4 13h5-5Zm11 0h5-5Z"}"></path></svg>`;
});
export {
  Component as default
};
