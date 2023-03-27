import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M299.3 376c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16h-75.3c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h235.3zm-160-136c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16H212.7c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h75.3zm160-136c6.2-14.1 20.3-24 36.7-24s30.5 9.9 36.7 24H448c8.8 0 16 7.2 16 16s-7.2 16-16 16h-75.3c-6.2 14.1-20.3 24-36.7 24s-30.5-9.9-36.7-24H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h235.3z"}"></path></svg>`;
});
export {
  Component as default
};
