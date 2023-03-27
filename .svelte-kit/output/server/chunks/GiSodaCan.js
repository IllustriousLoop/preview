import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m171 42-20 48h210l-20-48H171zm-19.45 65.55v296.9h208.9v-296.9h-208.9zM151 422l20 48h170l20-48H151z"}"></path></svg>`;
});
export {
  Component as default
};
