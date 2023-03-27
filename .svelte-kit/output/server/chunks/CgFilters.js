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
  )}><path fill-rule="${"evenodd"}" d="${"M4.708 15.44a6.968 6.968 0 0 0 3.997 1.266 7 7 0 1 0 6.59-9.413A7 7 0 1 0 4.708 15.44Zm1.147-1.64a4.976 4.976 0 0 0 2.432.886 6.97 6.97 0 0 1 1.256-4.408 6.97 6.97 0 0 1 3.713-2.687 5 5 0 1 0-7.4 6.21Zm12.29-3.603a4.977 4.977 0 0 0-2.432-.885 6.97 6.97 0 0 1-1.256 4.408 6.97 6.97 0 0 1-3.713 2.687 5 5 0 1 0 7.4-6.21Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
