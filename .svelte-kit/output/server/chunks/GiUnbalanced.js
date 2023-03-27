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
  )}><path d="${"M404.5 162.5c-26.1 0-47 20.9-47 47s20.9 47 47 47 47-20.9 47-47-20.9-47-47-47zm72.2 89.1-447.99 176 6.58 16.8 448.01-176-6.6-16.8zM121.2 287l-87.28 35 29 72.4 87.28-35-29-72.4zM256 383l-78 104h156l-78-104z"}"></path></svg>`;
});
export {
  Component as default
};
