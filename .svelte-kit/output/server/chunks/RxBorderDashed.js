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
  )}><path fill-rule="${"evenodd"}" d="${"M0 7.5A.5.5 0 0 1 .5 7H3a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Zm5.75 0a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5ZM12 7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H12Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
