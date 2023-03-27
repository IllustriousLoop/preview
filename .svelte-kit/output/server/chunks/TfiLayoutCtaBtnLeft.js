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
  )}><path d="${"M15 7H8V6h7v1zM8.007 9h5V8h-5v1zM17 3v10H0V3h17zm-1 1H1v8h15V4zM7 6H2v2h5V6z"}"></path></svg>`;
});
export {
  Component as default
};
