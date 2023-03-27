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
  )}><path fill-rule="${"evenodd"}" d="${"M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1Zm6.5 9.625a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
