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
  )}><path fill-rule="${"evenodd"}" d="${"M3.5 6h8a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 1 1 0-3ZM1 7.5A2.5 2.5 0 0 1 3.5 5h8a2.5 2.5 0 0 1 0 5h-8A2.5 2.5 0 0 1 1 7.5ZM4.5 7a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
