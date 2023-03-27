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
  )}><circle cx="${"24"}" cy="${"24"}" r="${"21"}" fill="${"#4CAF50"}"></circle><g fill="${"#fff"}"><path d="${"M21 14h6v20h-6z"}"></path><path d="${"M14 21h20v6H14z"}"></path></g></svg>`;
});
export {
  Component as default
};
