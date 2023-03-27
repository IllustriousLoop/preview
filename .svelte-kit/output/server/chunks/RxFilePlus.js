import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V4.707L9.293 2H3.5ZM2 2.5A1.5 1.5 0 0 1 3.5 1h6a.5.5 0 0 1 .354.146l2.926 2.927c.141.14.22.332.22.53V12.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5v-10Zm2.75 5a.5.5 0 0 1 .5-.5H7V5.25a.5.5 0 0 1 1 0V7h1.75a.5.5 0 0 1 0 1H8v1.75a.5.5 0 0 1-1 0V8H5.25a.5.5 0 0 1-.5-.5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
