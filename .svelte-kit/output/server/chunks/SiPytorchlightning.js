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
  )}><path d="${"M12 0 1.75 6v12L12 24l10.25-6V6zm-1.775 18 1.08-4.657-2.428-2.397L13.79 6l-1.082 4.665 2.414 2.384z"}"></path></svg>`;
});
export {
  Component as default
};
