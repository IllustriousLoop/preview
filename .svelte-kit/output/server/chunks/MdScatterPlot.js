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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0V0z"}"></path><circle cx="${"7"}" cy="${"14"}" r="${"3"}"></circle><circle cx="${"11"}" cy="${"6"}" r="${"3"}"></circle><circle cx="${"16.6"}" cy="${"17.6"}" r="${"3"}"></circle></svg>`;
});
export {
  Component as default
};
