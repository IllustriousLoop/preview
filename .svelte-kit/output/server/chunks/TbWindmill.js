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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3v9zm0 0c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5h-9zm0 0c-2.76 0-5 2.01-5 4.5S9.24 21 12 21v-9zm0 0c0-2.76-2.01-5-4.5-5S3 9.24 3 12h9z"}"></path></svg>`;
});
export {
  Component as default
};
