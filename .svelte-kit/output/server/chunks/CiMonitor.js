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
  )}><path d="${"M18.435 3.06H5.565a2.5 2.5 0 0 0-2.5 2.5v8.88a2.507 2.507 0 0 0 2.5 2.5h2.91l-.37 3H7a.5.5 0 0 0 0 1h10.01a.5.5 0 0 0 0-1H15.9l-.37-3h2.91a2.507 2.507 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.505-2.5ZM14.9 19.94H9.115l.37-3h5.03Zm5.04-5.5a1.5 1.5 0 0 1-1.5 1.5H5.565a1.5 1.5 0 0 1-1.5-1.5V5.56a1.5 1.5 0 0 1 1.5-1.5h12.87a1.5 1.5 0 0 1 1.5 1.5Z"}"></path></svg>`;
});
export {
  Component as default
};
