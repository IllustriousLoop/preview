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
  )}><path fill-rule="${"evenodd"}" d="${"M13 3h8v8h-8V3Zm2 2h4v4h-4V5Z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M17 21v-8h-6V7H3v14h14ZM9 9H5v4h4V9ZM5 19v-4h4v4H5Zm6 0v-4h4v4h-4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
