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
  )}><path d="${"M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}"></path><path fill-rule="${"evenodd"}" d="${"M2 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V3Zm3-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
