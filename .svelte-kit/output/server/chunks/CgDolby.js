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
  )}><path fill-rule="${"evenodd"}" d="${"M0 4v16h24V4H0Zm10 8a4 4 0 0 0-4-4H4v8h2a4 4 0 0 0 4-4Zm8 4h2V8h-2a4 4 0 0 0 0 8Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
