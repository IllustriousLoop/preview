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
  )}><path d="${"M6 17V7h2v10H6ZM16 7v10h2V7h-2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M2 3h20v18H2V3Zm2 2v14h16V5H4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
