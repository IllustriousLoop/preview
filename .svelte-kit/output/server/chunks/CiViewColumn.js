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
  )}><path d="${"M18.44 3.06H5.56a2.507 2.507 0 0 0-2.5 2.5v12.88a2.514 2.514 0 0 0 2.5 2.5h12.88a2.514 2.514 0 0 0 2.5-2.5V5.56a2.507 2.507 0 0 0-2.5-2.5ZM8.67 19.94H5.56a1.511 1.511 0 0 1-1.5-1.5V5.56a1.5 1.5 0 0 1 1.5-1.5h3.11Zm1-15.88h4.66v15.88H9.67Zm10.27 14.38a1.511 1.511 0 0 1-1.5 1.5h-3.11V4.06h3.11a1.5 1.5 0 0 1 1.5 1.5Z"}" data-name="${"View Column"}"></path></svg>`;
});
export {
  Component as default
};
