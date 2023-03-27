import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8.5.5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 1c1.75 0 3.348.65 4.577 1.716l-9.86 9.861A6.957 6.957 0 0 1 1.5 8.5c0-3.859 3.14-7 7-7zm0 14c-1.75 0-3.348-.65-4.577-1.716l9.86-9.861A6.957 6.957 0 0 1 15.5 8.5c0 3.859-3.14 7-7 7z"}"></path></svg>`;
});
export {
  Component as default
};
