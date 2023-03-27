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
  )}><path d="${"M8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-5-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM8 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Z"}"></path><path fill-rule="${"evenodd"}" d="${"M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm12 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
