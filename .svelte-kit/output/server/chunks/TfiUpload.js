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
  )}><path d="${"M17 16v1H0v-1h17zM7.999 1.708V13h1V1.706l3.647 3.647.707-.707L8.5-.207 3.646 4.646l.707.707 3.646-3.645z"}"></path></svg>`;
});
export {
  Component as default
};
