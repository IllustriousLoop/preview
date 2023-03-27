import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M0 7.998h.5v1H0v-1zm2.383 1.001h.941v-1h-.941v1zm2.823 0h.941v-1h-.941v1zM10.854 9h.941V8h-.941v1zM8.03 8.999h.94V8h-.94v.999zM13.677 9h.941V8h-.941v1zM16.5 8v1h.5V8h-.5z"}"></path></svg>`;
});
export {
  Component as default
};
