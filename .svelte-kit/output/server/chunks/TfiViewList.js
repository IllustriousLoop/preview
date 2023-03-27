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
  )}><path d="${"M0 0v4h17V0H0zm16 3H1V1h15v2zM0 10h17V6H0v4zm1-3h15v2H1V7zm-1 9h17v-4H0v4zm1-3h15v2H1v-2z"}"></path></svg>`;
});
export {
  Component as default
};
