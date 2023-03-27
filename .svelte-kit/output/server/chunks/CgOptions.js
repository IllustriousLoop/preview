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
  )}><path fill-rule="${"evenodd"}" d="${"M7 3a4.002 4.002 0 0 1 3.874 3H19v2h-8.126A4.002 4.002 0 0 1 3 7a4 4 0 0 1 4-4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 11a4.002 4.002 0 0 1-3.874-3H5v-2h8.126A4.002 4.002 0 0 1 21 16a4 4 0 0 1-4 4Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
