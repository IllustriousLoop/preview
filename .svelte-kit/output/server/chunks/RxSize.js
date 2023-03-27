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
  )}><path fill-rule="${"evenodd"}" d="${"M11.5 3.05a.45.45 0 0 1 .45.45v4a.45.45 0 0 1-.9 0V4.586L4.586 11.05H7.5a.45.45 0 0 1 0 .9h-4a.45.45 0 0 1-.45-.45v-4a.45.45 0 1 1 .9 0v2.914l6.464-6.464H7.5a.45.45 0 1 1 0-.9h4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
