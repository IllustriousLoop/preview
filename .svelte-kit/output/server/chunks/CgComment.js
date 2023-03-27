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
  )}><path d="${"M17 9H7V7h10v2ZM7 13h10v-2H7v2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M2 18V2h20v16h-6v4h-2a4 4 0 0 1-4-4H2Zm10-2v2a2 2 0 0 0 2 2v-4h6V4H4v12h8Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
