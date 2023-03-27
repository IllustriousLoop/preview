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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 12v.01m7.071-7.081a4 10 45 0 0-9.9 4.243 4 10 45 0 0-4.242 9.9 4 10 45 0 0 9.9-4.244 4 10 45 0 0 4.242-9.9"}"></path><path d="${"M4.929 4.929a10 4 45 0 0 4.243 9.9 10 4 45 0 0 9.9 4.242 10 4 45 0 0-4.244-9.9 10 4 45 0 0-9.9-4.242"}"></path></svg>`;
});
export {
  Component as default
};
