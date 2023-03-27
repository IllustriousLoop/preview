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
  )}><path fill-rule="${"evenodd"}" d="${"M4 21h2V11h6v2h8V5h-7V3H4v18Zm8-16H6v4h7v2h5V7h-6V5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
