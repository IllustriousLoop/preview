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
  )}><path d="${"m470 124.837-98.443-81.78-27.814 32.931 98.442 81.769L470 124.837zM167.192 74.919 139.366 42 42 124.837l27.814 32.919 97.378-82.837zm99.509 97.709H234.6v127.446l101.649 60.539L352.3 334.06l-85.6-49.917V172.628zM256 87.665c-107 0-192.601 86.021-192.601 191.166C63.399 383.98 149 470 256 470c105.936 0 192.601-86.02 192.601-191.169 0-105.144-86.665-191.166-192.601-191.166zm0 339.855c-82.393 0-149.8-66.906-149.8-148.688 0-81.777 67.407-148.684 149.8-148.684 82.394 0 149.8 66.906 149.8 148.684 0 82.839-67.406 148.688-149.8 148.688z"}"></path></svg>`;
});
export {
  Component as default
};
