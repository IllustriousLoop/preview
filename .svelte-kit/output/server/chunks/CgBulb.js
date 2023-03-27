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
  )}><path fill-rule="${"evenodd"}" d="${"M4 9a7.997 7.997 0 0 0 4 6.93V16a4 4 0 1 0 8 0v-.07A8 8 0 1 0 4 9Zm12 4.472a6 6 0 1 0-8 0h2V16a2 2 0 1 0 4 0v-2.53l2 .001Z"}" clip-rule="${"evenodd"}"></path><path d="${"M10 21.006V21c.588.34 1.271.535 2 .535.729 0 1.412-.195 2-.535v.006a2 2 0 1 1-4 0Z"}"></path></svg>`;
});
export {
  Component as default
};
