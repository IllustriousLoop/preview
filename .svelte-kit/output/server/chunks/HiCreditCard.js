import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M4 4a2 2 0 0 0-2 2v1h16V6a2 2 0 0 0-2-2H4z"}"></path><path fill-rule="${"evenodd"}" d="${"M18 9H2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM4 13a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm5-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H9z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
