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
  )}><path d="${"M3.061 9.509v10.93a.508.508 0 0 0 .5.5.5.5 0 0 0 .5-.5V9.509a3.5 3.5 0 0 1 3.5-3.5h9.9l.01 1.44a.5.5 0 0 0 .81.4l2.47-1.96a.5.5 0 0 0 0-.78l-2.49-1.94a.5.5 0 0 0-.81.4l.01 1.44h-9.9a4.507 4.507 0 0 0-4.5 4.5Z"}" data-name="${"Turn R 1"}"></path></svg>`;
});
export {
  Component as default
};
