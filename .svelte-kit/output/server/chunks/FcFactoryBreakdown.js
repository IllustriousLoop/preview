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
  )}><path fill="${"#E64A19"}" d="${"M29 23v-6l-8 4v2h-4v4h-4v-4H5v20h28V23z"}"></path><path fill="${"#992B0A"}" d="${"M25 27h4v4h-4zM9 35h4v4H9zm16 0h4v4h-4zm-8 0h4v4h-4zm0-8h4v4h-4z"}"></path><path fill="${"#BF360C"}" d="${"M41.2 5H38v2h-2v2h-2.3L32 43h11z"}"></path></svg>`;
});
export {
  Component as default
};
