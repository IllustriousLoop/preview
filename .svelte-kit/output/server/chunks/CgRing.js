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
  )}><path fill-rule="${"evenodd"}" d="${"M6.343 3.686A8.015 8.015 0 0 1 7.936 2.45a8.014 8.014 0 0 1 8.128 0 8.016 8.016 0 0 1 1.593 1.236L12 9.343 6.343 3.686ZM12 6.514 9.413 3.927a6.017 6.017 0 0 1 5.174 0L12 6.514Z"}" clip-rule="${"evenodd"}"></path><path d="${"M2 12.658a9.98 9.98 0 0 1 3.692-7.76l1.423 1.424a8 8 0 1 0 9.77 0l1.423-1.424A9.98 9.98 0 0 1 22 12.658c0 5.522-4.477 10-10 10s-10-4.478-10-10Z"}"></path></svg>`;
});
export {
  Component as default
};
