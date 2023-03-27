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
  )}><path d="${"M15 9.5 10.5 14 9 12.5l-1 1 2.5 2.5 5.5-5.5z"}"></path><path d="${"M7 12h5v-1.799c-1.05-.613-2.442-1.033-4-1.16v-.825c1.102-.621 2-2.168 2-3.716C10 2.015 10 0 7 0S4 2.015 4 4.5c0 1.548.898 3.095 2 3.716v.825C2.608 9.318 0 10.985 0 13h7v-1z"}"></path></svg>`;
});
export {
  Component as default
};
