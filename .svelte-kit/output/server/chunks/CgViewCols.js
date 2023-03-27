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
  )}><path fill-rule="${"evenodd"}" d="${"M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Zm14-1h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3V7Zm-2 0h-4v10h4V7ZM8 17V7H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
