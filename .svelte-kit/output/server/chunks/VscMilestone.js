import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M8 1H7v2H1.5l-.5.5v4l.5.5H7v7h1V8h4.49l.34-.13 2.18-2v-.74l-2.18-2L12.5 3H8V1zm4.29 6H2V4h10.29l1.63 1.5L12.29 7zM5 5h5v1H5V5z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
