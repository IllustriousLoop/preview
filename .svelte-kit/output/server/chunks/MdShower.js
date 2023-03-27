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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0V0z"}"></path><circle cx="${"8"}" cy="${"17"}" r="${"1"}"></circle><circle cx="${"12"}" cy="${"17"}" r="${"1"}"></circle><circle cx="${"16"}" cy="${"17"}" r="${"1"}"></circle><path d="${"M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92z"}"></path><circle cx="${"8"}" cy="${"20"}" r="${"1"}"></circle><circle cx="${"12"}" cy="${"20"}" r="${"1"}"></circle><circle cx="${"16"}" cy="${"20"}" r="${"1"}"></circle></svg>`;
});
export {
  Component as default
};
