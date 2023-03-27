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
  )}><path fill-rule="${"evenodd"}" d="${"M3.354 1.854a.5.5 0 1 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 1 0 .708-.708L2.207 4H9.5A3.5 3.5 0 0 1 13 7.5a.5.5 0 0 0 1 0A4.5 4.5 0 0 0 9.5 3H2.207l1.147-1.146ZM2 7.5a.5.5 0 0 0-1 0A4.5 4.5 0 0 0 5.5 12h7.293l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L12.793 11H5.5A3.5 3.5 0 0 1 2 7.5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
