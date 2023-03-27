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
  )}><path d="${"M2 5h20V3H2v2Zm0 16h20v-2H2v2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M2 7v10h20V7H2Zm2 2h16v6H4V9Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
