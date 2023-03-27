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
  )}><path d="${"M13.893 2.809a.499.499 0 0 0-.393-.808h-11a.501.501 0 0 0-.393.808L7 9.037V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9V9.037l4.893-6.228zM12.471 3 10.9 5H5.1L3.529 3h8.943z"}"></path></svg>`;
});
export {
  Component as default
};
