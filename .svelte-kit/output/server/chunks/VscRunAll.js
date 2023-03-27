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
  )}><path d="${"M2.78 2 2 2.41v12l.78.42 9-6V8l-9-6zM3 13.48V3.35l7.6 5.07L3 13.48z"}"></path><path fill-rule="${"evenodd"}" d="${"m6 14.683 8.78-5.853V8L6 2.147V3.35l7.6 5.07L6 13.48v1.203z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
