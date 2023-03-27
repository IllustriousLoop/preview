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
  )}><path fill-rule="${"evenodd"}" d="${"m6 1.5.5-.5h8l.5.5v7l-.5.5H12V8h2V4H7v1H6V1.5zM7 2v1h7V2H7zM1.5 7l-.5.5v7l.5.5h8l.5-.5v-7L9.5 7h-8zM2 9V8h7v1H2zm0 1h7v4H2v-4z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
