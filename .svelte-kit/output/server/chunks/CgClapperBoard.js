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
  )}><path fill-rule="${"evenodd"}" d="${"m20.17 3-.004.005A3 3 0 0 1 23 6v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16.17Zm-9.694 2h6L13.09 9h-6l3.387-4ZM5.09 9l3.387-4H4a1 1 0 0 0-1 1v3h2.089ZM3 11v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7H3Zm18-2V6a1 1 0 0 0-1-1h-1.524L15.09 9H21Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
