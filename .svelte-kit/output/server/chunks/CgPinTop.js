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
  )}><path d="${"M12 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"}"></path><path fill-rule="${"evenodd"}" d="${"M8 5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2h-3v5.083A6.002 6.002 0 0 1 12 22a6 6 0 0 1-1-11.917V5H8Zm4 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
