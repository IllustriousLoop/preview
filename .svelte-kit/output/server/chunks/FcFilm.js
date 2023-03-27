import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#3F51B5"}" d="${"M45 9H3v30h42V9zM22 37v-4h4v4h-4zm8 0v-4h4v4h-4zm8 0v-4h4v4h-4zm-24 0v-4h4v4h-4zm-8 0v-4h4v4H6zm16-22v-4h4v4h-4zm8 0v-4h4v4h-4zm8 0v-4h4v4h-4zm-24 0v-4h4v4h-4zm-8 0v-4h4v4H6z"}"></path></svg>`;
});
export {
  Component as default
};
