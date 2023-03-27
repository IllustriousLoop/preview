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
  )}><path d="${"m16.716 8.5-3.954 3.858-.698-.716L14.771 9H2.229l2.708 2.642-.698.716L.284 8.5l3.954-3.858.698.716L2.229 8h12.543l-2.708-2.642.698-.716L16.716 8.5z"}"></path></svg>`;
});
export {
  Component as default
};
