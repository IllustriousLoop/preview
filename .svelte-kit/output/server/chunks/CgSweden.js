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
  )}><path d="${"M23 4H10v7h13V4Zm0 9v7H10v-7h13ZM8 13v7H1v-7h7Zm-7-2V4h7v7H1Z"}"></path></svg>`;
});
export {
  Component as default
};
