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
  )}><path d="${"M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M15 14a5 5 0 1 1-6 0V4a3 3 0 1 1 6 0v10ZM13 4v11.17A3.001 3.001 0 0 1 12 21a3 3 0 0 1-1-5.83V4a1 1 0 1 1 2 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
