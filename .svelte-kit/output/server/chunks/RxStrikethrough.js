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
  )}><path fill-rule="${"evenodd"}" d="${"M5 3.25a.5.5 0 0 0-1 0V7.1H2.5a.4.4 0 1 0 0 .8H4v.65a3.5 3.5 0 1 0 7 0V7.9h1.5a.4.4 0 0 0 0-.8H11V3.25a.5.5 0 1 0-1 0V7.1H5V3.25ZM5 7.9v.65a2.5 2.5 0 0 0 5 0V7.9H5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
