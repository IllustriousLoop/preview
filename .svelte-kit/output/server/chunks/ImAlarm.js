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
  )}><path d="${"M8 2a7 7 0 1 0 0 14A7 7 0 0 0 8 2zm0 12.625a5.624 5.624 0 1 1 0-11.25 5.624 5.624 0 1 1 0 11.25zm6.606-10.138a3 3 0 0 0-4.98-3.321 8.008 8.008 0 0 1 4.98 3.322zM6.374 1.166a3 3 0 0 0-4.98 3.321 8.006 8.006 0 0 1 4.98-3.322z"}"></path><path d="${"M8 9V5H7v5h4V9z"}"></path></svg>`;
});
export {
  Component as default
};
