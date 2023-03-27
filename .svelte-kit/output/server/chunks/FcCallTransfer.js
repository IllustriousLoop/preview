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
  )}><path fill="${"#009688"}" d="${"m39.2 8.4-1.8 1.8c-6.3 6.5-5.4 22 0 27.6l1.8 1.8c.5.5 1.3.5 1.8 0l3.6-3.7c.5-.5.5-1.3 0-1.8l-3.4-3.4h-4.8c-1.3-1.3-1.3-12.1 0-13.4h4.8l3.3-3.4c.5-.5.5-1.3 0-1.8L41 8.4c-.5-.5-1.3-.5-1.8 0zm-28 0-1.8 1.8c-6.3 6.5-5.4 22 0 27.6l1.8 1.8c.5.5 1.3.5 1.8 0l3.6-3.7c.5-.5.5-1.3 0-1.8l-3.4-3.4H8.5c-1.3-1.3-1.3-12.1 0-13.4h4.8l3.3-3.4c.5-.5.5-1.3 0-1.8L13 8.4c-.5-.5-1.3-.5-1.8 0z"}"></path><g fill="${"#2196F3"}"><path d="${"m25.3 18.6 5.4 5.4-5.4 5.4z"}"></path><path d="${"M16 22h11v4H16z"}"></path></g></svg>`;
});
export {
  Component as default
};
