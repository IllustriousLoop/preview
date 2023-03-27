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
  )}><path d="${"M15 5H6V4h9v1zM6 6v1h11V6H6zM0 8h5V3H0v5zm15 3H6v1h9v-1zm-9 3h11v-1H6v1zm-6 1h5v-5H0v5z"}"></path></svg>`;
});
export {
  Component as default
};
