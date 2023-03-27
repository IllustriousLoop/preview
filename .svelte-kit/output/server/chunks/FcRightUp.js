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
  )}><path fill="${"#3F51B5"}" d="${"M41 7v18L23 7z"}"></path><path fill="${"#3F51B5"}" d="${"m12.641 40.983-5.656-5.656 23.12-23.119 5.655 5.656z"}"></path></svg>`;
});
export {
  Component as default
};
