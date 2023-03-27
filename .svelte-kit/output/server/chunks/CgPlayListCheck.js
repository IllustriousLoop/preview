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
  )}><path d="${"M15 6H3v2h12V6Zm0 4H3v2h12v-2ZM3 14h8v2H3v-2Zm8.99 1.025 1.415-1.414 2.121 2.121 4.243-4.242 1.414 1.414-5.657 5.657-3.535-3.536Z"}"></path></svg>`;
});
export {
  Component as default
};
