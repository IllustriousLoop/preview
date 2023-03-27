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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><rect x="${"3"}" y="${"14"}" rx="${"1"}"></rect><path d="${"M6 15a1 1 0 0 1 1-1h3.756a1 1 0 0 1 .958.713l1.2 3c.09.303.133.63-.056.884-.188.254-.542.403-.858.403h-2v2.467a1.1 1.1 0 0 1-2.015.61L6 19v-4zm8-12v4a1 1 0 0 0 1 1h4"}"></path><path d="${"M5 11V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-2.5"}"></path></svg>`;
});
export {
  Component as default
};
