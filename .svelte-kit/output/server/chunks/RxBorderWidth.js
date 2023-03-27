import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M1 3h13v1H1V3Zm0 3h13v2H1V6Zm13 4.25H1v2.5h13v-2.5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
