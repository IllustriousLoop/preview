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
  )}><path fill="${"#4CAF50"}" d="${"M40 21h4v23h-4zm-6 7h4v16h-4zm-6-5h4v21h-4zm-6 6h4v15h-4zm-6 3h4v12h-4zm-6-2h4v14h-4zm-6 4h4v10H4z"}"></path><g fill="${"#388E3C"}"><path d="${"M40.1 9.1 34 15.2l-4-4-10 10-5-5L4.6 26.6l2.8 2.8 7.6-7.6 5 5 10-10 4 4 8.9-8.9z"}"></path><path d="${"M44 8h-9l9 9z"}"></path></g></svg>`;
});
export {
  Component as default
};
