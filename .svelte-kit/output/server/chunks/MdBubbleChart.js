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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"7.2"}" cy="${"14.4"}" r="${"3.2"}"></circle><circle cx="${"14.8"}" cy="${"18"}" r="${"2"}"></circle><circle cx="${"15.2"}" cy="${"8.8"}" r="${"4.8"}"></circle></svg>`;
});
export {
  Component as default
};
