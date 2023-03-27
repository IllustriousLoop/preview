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
  )}><path fill-rule="${"evenodd"}" d="${"M17 21a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2v-1a7 7 0 1 0-14 0v1h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3v-9a9 9 0 0 1 18 0v9h-4Zm2-6h-2v4h2v-4ZM7 15H5v4h2v-4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
