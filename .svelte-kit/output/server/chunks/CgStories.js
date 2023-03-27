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
  )}><path fill-rule="${"evenodd"}" d="${"M15 6H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM9 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H9Z"}" clip-rule="${"evenodd"}"></path><path d="${"M2 6a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0V6Zm18 0a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V6Z"}"></path></svg>`;
});
export {
  Component as default
};
