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
  )}><path fill-rule="${"evenodd"}" d="${"M3 4h14v16H3V4Zm2 2h10v12H5V6Z"}" clip-rule="${"evenodd"}"></path><path d="${"M21 4h-2v16h2V4Z"}"></path></svg>`;
});
export {
  Component as default
};
