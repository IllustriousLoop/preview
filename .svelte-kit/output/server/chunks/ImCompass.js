import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8.5 16a.5.5 0 0 1-.5-.5V8H.5a.5.5 0 0 1-.211-.953l15-7a.5.5 0 0 1 .665.665l-7 15a.5.5 0 0 1-.453.289zM2.754 7H8.5a.5.5 0 0 1 .5.5v5.746l5.465-11.712L2.753 6.999z"}"></path></svg>`;
});
export {
  Component as default
};
