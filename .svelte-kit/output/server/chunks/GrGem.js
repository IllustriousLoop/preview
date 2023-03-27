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
  )}><path fill="${"#000"}" fill-rule="${"evenodd"}" d="${"M7 1h-.414l-.293.293-3 3L3 4.586v14.828l.293.293 3 3 .293.293h10.828l.293-.293 3-3 .293-.293V4.586l-.293-.293-3-3L17.414 1H7ZM5 6v12h1V6H5Zm3 15h8v-1H8v1Zm11-3V6h-1v12h1ZM16 3H8v1h8V3Zm0 3v12H8V6h8Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
