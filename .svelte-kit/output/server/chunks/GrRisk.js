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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M14 10h1V9h-1v1Zm4 0h1V9h-1v1Zm0-4h1V5h-1v1Zm-4 0h1V5h-1v1ZM9 19h1v-1H9v1Zm-4-4h1v-1H5v1Zm5-5H1v13h13v-9m-4 0h13V1H10v13Z"}"></path></svg>`;
});
export {
  Component as default
};
