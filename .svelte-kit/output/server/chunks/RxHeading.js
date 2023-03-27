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
  )}><path fill-rule="${"evenodd"}" d="${"M8.754 2.05a.45.45 0 1 0 0 .9H9.95v4.1h-4.9v-4.1h1.204a.45.45 0 1 0 0-.9h-3.5a.45.45 0 1 0 0 .9H3.95v9.1H2.754a.45.45 0 0 0 0 .9h3.5a.45.45 0 0 0 0-.9H5.05v-4.1h4.9v4.1H8.754a.45.45 0 0 0 0 .9h3.5a.45.45 0 0 0 0-.9H11.05v-9.1h1.204a.45.45 0 0 0 0-.9h-3.5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
