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
  )}><path d="${"M8.016 6.982a1.003 1.003 0 0 0 0 2.006h7.95a1.003 1.003 0 0 0 0-2.006h-7.95Zm-1 5.018c0-.552.447-1.003 1-1.003h7.95a1.003 1.003 0 0 1 0 2.006h-7.95c-.553 0-1-.45-1-1.003Zm1.009 3.012a1.003 1.003 0 0 0 0 2.007h7.95a1.003 1.003 0 0 0 0-2.007h-7.95Z"}"></path><path fill-rule="${"evenodd"}" d="${"M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
