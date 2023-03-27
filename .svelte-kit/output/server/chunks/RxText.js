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
  )}><path fill-rule="${"evenodd"}" d="${"M3.95 2.95V4.5a.45.45 0 0 1-.9 0v-2a.45.45 0 0 1 .45-.45h8a.45.45 0 0 1 .45.45v2a.45.45 0 1 1-.9 0V2.95h-3v9.1h1.204a.45.45 0 0 1 0 .9h-3.5a.45.45 0 1 1 0-.9H6.95v-9.1h-3Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
