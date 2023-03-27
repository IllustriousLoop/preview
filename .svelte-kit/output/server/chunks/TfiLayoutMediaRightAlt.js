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
  )}><path d="${"M2 13h15v1H2v-1zm5 2.993h10v-1H7v1zM17 1v11H0V1h17zm-1 1H1v9h15V2z"}"></path></svg>`;
});
export {
  Component as default
};
