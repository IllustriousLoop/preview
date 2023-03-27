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
  )}><path fill-rule="${"evenodd"}" d="${"M7.181 1.682a.45.45 0 0 1 .637 0l2.5 2.5a.45.45 0 0 1-.637.636L7.95 3.086v8.828l1.731-1.732a.45.45 0 0 1 .637.636l-2.5 2.5a.45.45 0 0 1-.637 0l-2.5-2.5a.45.45 0 0 1 .637-.636l1.732 1.732V3.086L5.317 4.818a.45.45 0 0 1-.637-.636l2.5-2.5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
