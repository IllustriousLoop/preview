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
  )}><path d="${"M12.497 0H6v2.01h1V1h5v4h4v8h-4.017v1H17V4.182L12.497 0zM13 1.832 15.335 4H13V1.832zM0 3v14h11V7.182L6.497 3H0zm7 1.832L9.335 7H7V4.832zM1 16V4h5v4h4v8H1z"}"></path></svg>`;
});
export {
  Component as default
};
