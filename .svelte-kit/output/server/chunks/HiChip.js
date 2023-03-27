import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M13 7H7v6h6V7z"}"></path><path fill-rule="${"evenodd"}" d="${"M7 2a1 1 0 0 1 2 0v1h2V2a1 1 0 1 1 2 0v1h2a2 2 0 0 1 2 2v2h1a1 1 0 1 1 0 2h-1v2h1a1 1 0 1 1 0 2h-1v2a2 2 0 0 1-2 2h-2v1a1 1 0 1 1-2 0v-1H9v1a1 1 0 1 1-2 0v-1H5a2 2 0 0 1-2-2v-2H2a1 1 0 1 1 0-2h1V9H2a1 1 0 0 1 0-2h1V5a2 2 0 0 1 2-2h2V2zM5 5h10v10H5V5z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
