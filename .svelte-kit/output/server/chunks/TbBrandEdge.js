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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M20.978 11.372a9 9 0 1 0-1.593 5.773"}"></path><path d="${"M20.978 11.372c.21 2.993-5.034 2.413-6.913 1.486 1.392-1.6.402-4.038-2.274-3.851-1.745.122-2.927 1.157-2.784 3.202.28 3.99 4.444 6.205 10.36 4.79"}"></path><path d="${"M3.022 12.628C2.739 8.585 11.739 5.4 14.27 9.94m-1.642 11.038c-2.993.21-5.162-4.725-3.567-9.748"}"></path></svg>`;
});
export {
  Component as default
};
