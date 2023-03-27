import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 1024 1024" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m354.752 176 78.624 77.248L453.488 272H960v576H64V176h290.752zM384 112H64c-35.344 0-64 28.656-64 64v672c0 35.344 28.656 64 64 64h896c35.344 0 64-28.656 64-64V272c0-35.344-28.656-64-64-64H480z"}"></path></svg>`;
});
export {
  Component as default
};
