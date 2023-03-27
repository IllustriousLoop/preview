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
  )}><path fill-rule="${"evenodd"}" d="${"M8 3 7 4v8l1 1h6l1-1V4l-1-1H8zm6 9H8V4h6v8zM5 9V5h1V4H4.5l-.5.5v7l.5.5H6v-1H5V9zM2 8V6h1V5H1.5l-.5.5v5l.5.5H3v-1H2V8z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
