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
  )}><path d="${"M16.945 5.055a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2 11.837a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-7.89-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2-7.837a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"}"></path><path fill-rule="${"evenodd"}" d="${"M4 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4Zm16 2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
