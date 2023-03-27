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
  )}><path fill-rule="${"evenodd"}" d="${"m1.5 2-.5.5v11l.5.5H4v-1H2V3h2V2H1.5zm13 12 .5-.5v-11l-.5-.5H12v1h2v10h-2v1h2.5z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
