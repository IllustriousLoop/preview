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
  )}><path fill-rule="${"evenodd"}" d="${"M15.945 21.956A9 9 0 0 1 5.635 7.5L12 1.136 18.364 7.5a8.97 8.97 0 0 1 1.991 3.012 9.002 9.002 0 0 1-1.991 9.716 8.987 8.987 0 0 1-2.419 1.728ZM7.05 8.914 12 3.964l4.95 4.95a6.977 6.977 0 0 1 2.048 4.783H5.002A6.976 6.976 0 0 1 7.05 8.914Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
