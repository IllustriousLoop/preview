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
  )}><path fill-rule="${"evenodd"}" d="${"M5.28 5.656 2 7.006l-.66-.26L0 3.506l.92-.38.81 1.95a6.48 6.48 0 0 1 12.48 1.93h-1a5.48 5.48 0 0 0-10.64-1.28l2.32-1 .39.93Zm8.86 2.68 1.34 3.23-.92.44-.82-2a6.49 6.49 0 0 1-12.5-2h1v-.5a5.49 5.49 0 0 0 10.64 1.89l-2.25.93-.39-.92 3.25-1.35.65.28Z"}" clip-rule="${"evenodd"}"></path><circle cx="${"7.74"}" cy="${"7.54"}" r="${"1"}"></circle></svg>`;
});
export {
  Component as default
};
