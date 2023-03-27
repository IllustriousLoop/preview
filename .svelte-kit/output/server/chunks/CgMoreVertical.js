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
  )}><path fill-rule="${"evenodd"}" d="${"M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-3 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
