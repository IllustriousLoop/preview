import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M14.5 1h-13l-.5.5v10l.5.5H4v2.5l.854.354L7.707 12H14.5l.5-.5v-10l-.5-.5zM14 11H7.5l-.354.146L5 13.293V11.5l-.5-.5H2V2h12v9zm-4-1H6V8.979h4V10zM7.5 3h1v2h2v1h-2v2h-1V6h-2V5h2V3z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
