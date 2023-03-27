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
  )}><path d="${"M136 16v30h240V16H136zm0 60v60h240V76H136zm0 90v90h240v-90H136zm0 120v120h240V286H136zm-30 150c-15 0-30 15-30 30v30h360v-30c0-15-15-30-30-30H106z"}"></path></svg>`;
});
export {
  Component as default
};
