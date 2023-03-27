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
  )}><path d="${"M57 39v16h110V39H57zm32 34v318h46V73H89zm334 21.56-46 23.04V391h46V94.56zM254.2 187 233 197.6V391h46V211.7L254.2 187zM73 409v30h78v-30H73zm144 0v30h78v-30h-78zm144 0v30h78v-30h-78zM38.49 457l-10 30H483.5l-10-30H38.49z"}"></path></svg>`;
});
export {
  Component as default
};
