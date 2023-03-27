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
  )}><path d="${"M87.902 40.998 42.25 391.002h138.566l32 48h86.368l32-48h138.568L424.098 40.998h-98.536l-16 32H202.587l-16.967-32H87.902zm-46.904 368v78.004h430.004v-78.004H340.816l-32 48H203.184l-32-48H40.998z"}"></path></svg>`;
});
export {
  Component as default
};
