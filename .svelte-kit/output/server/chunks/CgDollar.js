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
  )}><path fill-rule="${"evenodd"}" d="${"M11 19v3h2v-3h1a4 4 0 0 0 0-8h-1V7h2v2h2V5h-4V2h-2v3h-1a4 4 0 1 0 0 8h1v4H9v-2H7v4h4Zm2-2h1a2 2 0 1 0 0-4h-1v4Zm-2-6V7h-1a2 2 0 1 0 0 4h1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
