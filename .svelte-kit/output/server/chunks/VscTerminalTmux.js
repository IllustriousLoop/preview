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
  )}><path fill-rule="${"evenodd"}" d="${"M13.5 1h-12l-.5.5v13l.5.5h12l.5-.5v-13l-.5-.5zM7 7.5V13H2V2h5v5.5zm6 5.5H8V8h5v5zm0-6H8V2h5v5z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
