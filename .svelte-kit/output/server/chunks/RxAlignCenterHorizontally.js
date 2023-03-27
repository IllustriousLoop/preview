import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M2 6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5v4.5a.5.5 0 0 0 1 0V9h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8V1.5a.5.5 0 0 0-1 0V6H2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
