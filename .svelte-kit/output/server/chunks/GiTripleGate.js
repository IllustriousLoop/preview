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
  )}><path d="${"M256 24 22 216v272h29.03V335.5c0-27.8 27.74-55.5 55.47-55.5 27.7 0 55.5 27.7 55.5 55.5V488h30V312c0-32 32-64 64-64s64 32 64 64v176h30V335.5c0-27.8 27.8-55.5 55.5-55.5s55.5 27.7 55.5 55.5V488h29V216zm-32 55h64v18h-64zm-64 64h192v18H160zm-64 64h320v18H96z"}"></path></svg>`;
});
export {
  Component as default
};
