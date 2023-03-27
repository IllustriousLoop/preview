import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M18.831 4.059a.49.49 0 0 0-.394-.121l-11 1.25A.5.5 0 0 0 7 5.684V16c-1.654 0-3 1.122-3 2.5S5.346 21 7 21s3-1.122 3-2.5v-7.609l6-.625V14c-1.654 0-3 1.122-3 2.5s1.346 2.5 3 2.5 3-1.122 3-2.5V4.434a.501.501 0 0 0-.169-.375z"}"></path></svg>`;
});
export {
  Component as default
};
