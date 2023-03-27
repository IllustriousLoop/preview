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
  )}><path d="${"M.021 1.012v15h17v-15h-17zm8.116 7.497-7.116 6.197V2.294l7.116 6.215zM1.459 2.012h14.138L8.518 8.177 1.459 2.012zm7.058 6.829 7.066 6.171H1.431l7.086-6.171zm.381-.332 7.123-6.204V14.73L8.898 8.509z"}"></path></svg>`;
});
export {
  Component as default
};
