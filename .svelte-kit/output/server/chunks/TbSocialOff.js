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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"12"}" cy="${"5"}" r="${"2"}"></circle><circle cx="${"5"}" cy="${"19"}" r="${"2"}"></circle><path d="${"M17.57 17.602a2 2 0 0 0 2.83 2.827m-9.287-9.296a3.001 3.001 0 1 0 3.765 3.715M12 7v1m-5.3 9.8 2.8-2m7.8 2-2.8-2M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
