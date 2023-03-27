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
  )}><path fill="${"#F44336"}" d="${"M40 34h4v10h-4zm-6-5h4v15h-4zm-6 4h4v11h-4zm-6-8h4v19h-4zm-6 3h4v16h-4zm-6-4h4v20h-4zm-6-5h4v25H4z"}"></path><g fill="${"#D32F2F"}"><path d="${"m34 13.2-4 4-10-10-5 5-7.6-7.6-2.8 2.8L15 17.8l5-5 10 10 4-4 6.1 6.1 2.8-2.8z"}"></path><path d="${"M44 26h-9l9-9z"}"></path></g></svg>`;
});
export {
  Component as default
};
