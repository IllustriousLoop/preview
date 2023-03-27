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
  )}><path d="${"M3 4v5.014C3 11.763 5.468 14 8.5 14S14 11.763 14 9.014V4H3zm10 5.014C13 11.212 10.981 13 8.5 13S4 11.212 4 9.014V5h9v4.014zM7.016 3h-1V0h1v3zm3.968 0h-1V0h1v3zM8 14h1v3H8v-3zm3-6H6V7h5v1zm0 2H6V9h5v1z"}"></path></svg>`;
});
export {
  Component as default
};
