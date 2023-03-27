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
  )}><path fill-rule="${"evenodd"}" d="${"M1.5 6.625a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm4 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm4 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm3.125.875a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
