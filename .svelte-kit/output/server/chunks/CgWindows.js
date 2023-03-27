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
  )}><path d="${"m3 5.548 7.195-.966v7.029l-7.188.054L3 5.55Zm7.195 6.843v7.105l-7.19-.985v-6.12h7.19Zm.918-7.935L20.998 3v8.533l-9.885.078V4.456ZM21 12.505 20.998 21l-9.885-1.353v-7.142H21Z"}"></path></svg>`;
});
export {
  Component as default
};
