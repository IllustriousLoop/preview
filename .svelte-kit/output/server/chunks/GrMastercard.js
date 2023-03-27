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
  )}><g fill="${"none"}" fill-rule="${"evenodd"}"><circle cx="${"7"}" cy="${"12"}" r="${"7"}" fill="${"#EA001B"}"></circle><circle cx="${"17"}" cy="${"12"}" r="${"7"}" fill="${"#FFA200"}" fill-opacity="${".8"}"></circle></g></svg>`;
});
export {
  Component as default
};
