import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M4 6c0-.556.227-1.059.593-1.421M9 4h1.5m3 0H15m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3V15m-.598 4.426A1.993 1.993 0 0 1 18 20m-3 0h-1.5m-3 0H9m-3 0a2 2 0 0 1-2-2m0-3v-1.5m0-3V9M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
