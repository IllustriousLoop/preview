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
  )}><path fill-rule="${"evenodd"}" d="${"M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5ZM9 5H5v4h4V5Z"}" clip-rule="${"evenodd"}"></path><path d="${"M19 13h2v8h-8v-2h4.586l-5.364-5.364a1 1 0 0 1 1.414-1.414L19 17.586V13Z"}"></path></svg>`;
});
export {
  Component as default
};
