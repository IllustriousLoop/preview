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
  )}><path d="${"M13 14h-2v2h2v-2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M8 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7Zm2 0h4v10h-4V7Z"}" clip-rule="${"evenodd"}"></path><path d="${"M18 9h2v6h-2V9ZM0 14h2v-4H0v4Zm6 1H4V9h2v6Zm18-5h-2v4h2v-4Z"}"></path></svg>`;
});
export {
  Component as default
};
