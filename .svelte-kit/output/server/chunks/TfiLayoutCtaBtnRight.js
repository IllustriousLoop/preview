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
  )}><path d="${"M9 7H2V6h7v1zM3.993 9h5V8h-5v1zM17 3v10H0V3h17zm-1 1H1v8h15V4zm-1 2h-5v2h5V6z"}"></path></svg>`;
});
export {
  Component as default
};
