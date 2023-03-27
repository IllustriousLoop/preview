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
  )}><path d="${"m4.359 5.956-.718-.697L8.5.254l4.859 5.005-.718.696L9 2.205v10.767H8V2.205L4.359 5.956zM16 9.03v6.47a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5V9.025H0V15.5c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V9.03h-1z"}"></path></svg>`;
});
export {
  Component as default
};
