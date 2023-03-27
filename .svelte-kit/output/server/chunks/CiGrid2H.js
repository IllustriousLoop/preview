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
  )}><path d="${"M18.437 11H5.565a2.5 2.5 0 0 1-2.5-2.5V5.564a2.5 2.5 0 0 1 2.5-2.5h12.872a2.5 2.5 0 0 1 2.5 2.5V8.5a2.5 2.5 0 0 1-2.5 2.5ZM5.565 4.064a1.5 1.5 0 0 0-1.5 1.5V8.5a1.5 1.5 0 0 0 1.5 1.5h12.872a1.5 1.5 0 0 0 1.5-1.5V5.564a1.5 1.5 0 0 0-1.5-1.5Zm12.872 16.872H5.565a2.5 2.5 0 0 1-2.5-2.5V15.5a2.5 2.5 0 0 1 2.5-2.5h12.872a2.5 2.5 0 0 1 2.5 2.5v2.934a2.5 2.5 0 0 1-2.5 2.502ZM5.565 14a1.5 1.5 0 0 0-1.5 1.5v2.934a1.5 1.5 0 0 0 1.5 1.5h12.872a1.5 1.5 0 0 0 1.5-1.5V15.5a1.5 1.5 0 0 0-1.5-1.5Z"}" data-name="${"Grid _2-H"}"></path></svg>`;
});
export {
  Component as default
};
