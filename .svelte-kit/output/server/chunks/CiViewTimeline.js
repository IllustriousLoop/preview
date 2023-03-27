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
  )}><g data-name="${"View Timeline"}"><path d="${"M18.436 20.94H5.562a2.5 2.5 0 0 1-2.5-2.5V5.567a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5V18.44a2.5 2.5 0 0 1-2.5 2.5ZM5.562 4.067a1.5 1.5 0 0 0-1.5 1.5V18.44a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5V5.567a1.5 1.5 0 0 0-1.5-1.5Z"}"></path><path d="${"M6.544 8.287a.5.5 0 0 1 0-1H12a.5.5 0 0 1 0 1ZM9.271 12.5a.5.5 0 0 1 0-1h5.454a.5.5 0 0 1 0 1ZM12 16.724a.5.5 0 0 1 0-1h5.455a.5.5 0 0 1 0 1Z"}"></path></g></svg>`;
});
export {
  Component as default
};
