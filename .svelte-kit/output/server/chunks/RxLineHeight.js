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
  )}><path fill-rule="${"evenodd"}" d="${"M3.782 2.217a.4.4 0 0 0-.565 0l-2 2a.4.4 0 0 0 .565.566L3.1 3.466v8.068l-1.317-1.317a.4.4 0 0 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 0 0-.565-.566L3.9 11.534V3.466l1.318 1.317a.4.4 0 0 0 .565-.566l-2-2ZM8.5 4a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1h-6ZM8 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1h-6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
