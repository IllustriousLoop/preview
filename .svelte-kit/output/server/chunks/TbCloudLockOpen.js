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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M19 18a3.5 3.5 0 0 0 0-7h-1c.397-1.768-.285-3.593-1.788-4.787-1.503-1.193-3.6-1.575-5.5-1S7.397 7.232 7 9c-2.199-.088-4.155 1.326-4.666 3.373-.512 2.047.564 4.154 2.566 5.027"}"></path><rect x="${"8"}" y="${"15"}" rx="${"1"}"></rect><path d="${"M10 15v-2a2 2 0 0 1 3.736-.994"}"></path></svg>`;
});
export {
  Component as default
};
