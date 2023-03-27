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
  )}><g fill="${"#00BCD4"}"><path d="${"M5 18 19 6.3v23.4z"}"></path><path d="${"M28 14H16v8h12c2.8 0 5 2.2 5 5s-2.2 5-5 5h-3v8h3c7.2 0 13-5.8 13-13s-5.8-13-13-13z"}"></path></g></svg>`;
});
export {
  Component as default
};
