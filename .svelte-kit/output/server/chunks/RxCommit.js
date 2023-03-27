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
  )}><path fill-rule="${"evenodd"}" d="${"M9.95 7.5a2.45 2.45 0 1 1-4.9 0 2.45 2.45 0 0 1 4.9 0Zm.913.5a3.4 3.4 0 0 1-6.726 0H.5a.5.5 0 0 1 0-1h3.637a3.4 3.4 0 0 1 6.726 0H14.5a.5.5 0 0 1 0 1h-3.637Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
