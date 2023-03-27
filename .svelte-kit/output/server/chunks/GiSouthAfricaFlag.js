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
  )}><path d="${"M18 18v104.324L222.445 256 18 389.676V494h55.553l273.765-179H494V197H347.318L73.553 18zm88.447 0 246.235 161H494V18zm246.235 315L106.447 494H494V333z"}"></path></svg>`;
});
export {
  Component as default
};
