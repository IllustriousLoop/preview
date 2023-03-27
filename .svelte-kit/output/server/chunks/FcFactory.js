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
  )}><path fill="${"#BF360C"}" d="${"M41.2 5h-7.3L32 43h11L41.2 5z"}"></path><path fill="${"#E64A19"}" d="${"M33 23h-4v-6l-12 6v-6L5 23v20h28V23z"}"></path><path fill="${"#FFC107"}" d="${"M9 27h4v4H9zm8 0h4v4h-4zm8 0h4v4h-4zM9 35h4v4H9zm8 0h4v4h-4zm8 0h4v4h-4z"}"></path></svg>`;
});
export {
  Component as default
};
