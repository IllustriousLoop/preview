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
  )}><path d="${"M256 16c-24 72-72 72-72 96s48 48 72 48 72-24 72-48-48-24-72-96zM112 184c-24 0-24 48-96 72 72 24 72 72 96 72s48-48 48-72-24-72-48-72zm288 0c-24 0-48 48-48 72s24 72 48 72 24-48 96-72c-72-24-72-72-96-72zm-141.906.03A72 72 0 0 0 184 256a72 72 0 0 0 144 0 72 72 0 0 0-69.906-71.97zM256 352c-24 0-72 24-72 48s48 24 72 96c24-72 72-72 72-96s-48-48-72-48z"}"></path></svg>`;
});
export {
  Component as default
};
