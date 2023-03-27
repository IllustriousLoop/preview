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
  )}><path fill-rule="${"evenodd"}" d="${"M13 15.9a5.002 5.002 0 0 0 4-4.9V4H7v7a5.002 5.002 0 0 0 4 4.9V18H9v2h6v-2h-2v-2.1ZM9 6h6v5a3 3 0 1 1-6 0V6Z"}" clip-rule="${"evenodd"}"></path><path d="${"M18 6h2v5h-2V6ZM6 6H4v5h2V6Z"}"></path></svg>`;
});
export {
  Component as default
};
