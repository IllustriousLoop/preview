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
  )}><path fill-rule="${"evenodd"}" d="${"M4.818 4.682a.45.45 0 0 1 0 .636L3.086 7.05h8.828l-1.732-1.732a.45.45 0 0 1 .636-.636l2.5 2.5a.45.45 0 0 1 0 .636l-2.5 2.5a.45.45 0 0 1-.636-.636l1.732-1.732H3.086l1.732 1.732a.45.45 0 1 1-.636.636l-2.5-2.5a.45.45 0 0 1 0-.636l2.5-2.5a.45.45 0 0 1 .636 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
