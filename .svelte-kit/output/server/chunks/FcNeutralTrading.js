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
  )}><g fill="${"#1565C0"}"><path d="${"M43.4 13 35 20V6z"}"></path><path d="${"M4 11h34v4H4z"}"></path></g><path fill="${"#2196F3"}" d="${"M40 23h4v19h-4zm-6 0h4v19h-4zm-6 0h4v19h-4zm-6 0h4v19h-4zm-6 0h4v19h-4zm-6 0h4v19h-4zm-6 0h4v19H4z"}"></path></svg>`;
});
export {
  Component as default
};
