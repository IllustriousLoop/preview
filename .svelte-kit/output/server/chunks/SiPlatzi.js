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
  )}><path d="${"M10.64 1.127 2.485 9.282a3.842 3.842 0 0 0 0 5.436l8.155 8.155a3.842 3.842 0 0 0 5.436 0l2.72-2.718-2.72-2.718-2.718 2.718L5.203 12l8.155-8.155 5.437 5.437-5.437 5.436 2.718 2.72L21.513 12a3.842 3.842 0 0 0 0-5.437l-5.448-5.436a3.828 3.828 0 0 0-5.425 0z"}"></path></svg>`;
});
export {
  Component as default
};
