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
  )}><path d="${"M4 3a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4z"}"></path><path fill-rule="${"evenodd"}" d="${"M3 8h14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8zm5 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
