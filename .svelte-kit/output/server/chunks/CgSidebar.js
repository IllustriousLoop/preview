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
  )}><path fill-rule="${"evenodd"}" d="${"M21 20H7V4h14v16Zm-2-2H9V6h10v12Z"}" clip-rule="${"evenodd"}"></path><path d="${"M3 20h2V4H3v16Z"}"></path></svg>`;
});
export {
  Component as default
};
