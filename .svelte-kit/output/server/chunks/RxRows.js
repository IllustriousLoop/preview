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
  )}><path fill-rule="${"evenodd"}" d="${"M14 12.85H1v1.3h13v-1.3Zm0-4H1v1.3h13v-1.3Zm-13-4h13v1.3H1v-1.3Zm13-4H1v1.3h13V.85Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
