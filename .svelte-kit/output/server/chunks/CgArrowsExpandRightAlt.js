import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M13.9 2.1v2h4.585l-5.778 5.78 1.414 1.414L19.9 5.515V10.1h2v-8h-8ZM5.515 19.9H10.1v2h-8v-8h2v4.585l5.778-5.778 1.414 1.414L5.515 19.9ZM9.172 7.757 7.757 9.172l7.071 7.07 1.415-1.414-7.071-7.07Z"}"></path></svg>`;
});
export {
  Component as default
};
