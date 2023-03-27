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
  )}><path d="${"M0 14h9v2H0zM14 2H9.273L6.402 13H4.335L7.206 2H3.001V0h11zm.528 14L12.5 13.972 10.472 16l-.972-.972L11.528 13 9.5 10.972l.972-.972 2.028 2.028L14.528 10l.972.972L13.472 13l2.028 2.028z"}"></path></svg>`;
});
export {
  Component as default
};
