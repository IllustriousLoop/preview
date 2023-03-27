import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M15.671 12.779 8.475 6.611A4.5 4.5 0 0 0 3.193.193l2.6 2.6a1.003 1.003 0 0 1 0 1.414L4.207 5.793a1.003 1.003 0 0 1-1.414 0l-2.6-2.6a4.5 4.5 0 0 0 6.418 5.282l6.168 7.196a.914.914 0 0 0 1.358.052l1.586-1.586a.914.914 0 0 0-.052-1.358z"}"></path></svg>`;
});
export {
  Component as default
};
