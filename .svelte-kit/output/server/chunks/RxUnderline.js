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
  )}><path fill-rule="${"evenodd"}" d="${"M5 2.75a.5.5 0 0 0-1 0v5.3a3.5 3.5 0 0 0 7 0v-5.3a.5.5 0 1 0-1 0v5.3a2.5 2.5 0 1 1-5 0v-5.3ZM3.5 13.1a.4.4 0 1 0 0 .8h8a.4.4 0 0 0 0-.8h-8Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
