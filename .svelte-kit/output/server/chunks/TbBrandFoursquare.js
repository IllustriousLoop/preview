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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M7 3h10c.644 0 1.11.696.978 1.33l-1.984 9.859A1.014 1.014 0 0 1 15 15h-2.254c-.308 0-.6.141-.793.382l-4.144 5.25C7.21 21.384 6 20.963 6 20V4c0-.564.44-1 1-1zm5 6h5"}"></path></svg>`;
});
export {
  Component as default
};
