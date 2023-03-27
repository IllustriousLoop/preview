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
  )}><path d="${"M16 5a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2h8Zm0 2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h8Zm1 5a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1Zm-1 9a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2h8Z"}" opacity="${".5"}"></path><path fill-rule="${"evenodd"}" d="${"M21 16a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
