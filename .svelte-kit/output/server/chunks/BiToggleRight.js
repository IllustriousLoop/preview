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
  )}><path d="${"M16 9c-1.628 0-3 1.372-3 3s1.372 3 3 3 3-1.372 3-3-1.372-3-3-3z"}"></path><path d="${"M16 6H8c-3.296 0-5.982 2.682-6 5.986v.042A6.01 6.01 0 0 0 8 18h8c3.309 0 6-2.691 6-6s-2.691-6-6-6zm0 10H8a4.006 4.006 0 0 1-4-3.99C4.004 9.799 5.798 8 8 8h8c2.206 0 4 1.794 4 4s-1.794 4-4 4z"}"></path></svg>`;
});
export {
  Component as default
};
