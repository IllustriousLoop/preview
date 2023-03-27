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
  )}><path fill-rule="${"evenodd"}" d="${"M2.15 14V1H.85v13h1.3Zm4 0V1h-1.3v13h1.3Zm4-13v13h-1.3V1h1.3Zm4 13V1h-1.3v13h1.3Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
