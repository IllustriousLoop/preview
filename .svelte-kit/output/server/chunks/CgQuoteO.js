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
  )}><path fill-rule="${"evenodd"}" d="${"M20 5H4v14h16V5ZM4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Z"}" clip-rule="${"evenodd"}"></path><path d="${"M9.067 9.196h3l-2.134 5.608h-3l2.134-5.608Zm5 0h3l-2.134 5.608h-3l2.134-5.608Z"}"></path></svg>`;
});
export {
  Component as default
};
