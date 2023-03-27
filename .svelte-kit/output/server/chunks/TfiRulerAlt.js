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
  )}><path d="${"M12.036.015.015 12.036l4.95 4.949 12.02-12.02-4.949-4.95zM1.429 12.036l.696-.696 1.414 1.414.707-.707-1.414-1.414.719-.719.707.707.707-.707-.707-.707.707-.707 1.414 1.414.707-.707-1.414-1.414.696-.696.707.707.707-.707-.707-.707.707-.707 1.414 1.414.707-.707-1.414-1.414.718-.718.707.707.707-.707-.707-.707.707-.707 1.415 1.414.707-.707-1.415-1.414.708-.708 3.535 3.536L4.965 15.571l-3.536-3.535z"}"></path></svg>`;
});
export {
  Component as default
};
