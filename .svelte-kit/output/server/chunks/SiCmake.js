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
  )}><path d="${"M11.769.066.067 23.206l12.76-10.843zm11.438 23.868L7.471 17.587 0 23.934zm.793-.198L12.298.463l1.719 19.24zM12.893 12.959l-5.025 4.298 5.62 2.248z"}"></path></svg>`;
});
export {
  Component as default
};
