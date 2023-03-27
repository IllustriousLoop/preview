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
  )}><path fill="${"#90CAF9"}" d="${"M42 42H6V10c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v32z"}"></path><path fill="${"#64B5F6"}" d="${"M6 42h36v2H6z"}"></path><path fill="${"#1565C0"}" d="${"M31 27h6v5h-6zm-10 0h6v5h-6zm-10 0h6v5h-6zm20 8h6v5h-6zm-20 0h6v5h-6zm20-16h6v5h-6zm-10 0h6v5h-6zm-10 0h6v5h-6zm20-8h6v5h-6zm-10 0h6v5h-6zm-10 0h6v5h-6zm10 24h6v9h-6z"}"></path></svg>`;
});
export {
  Component as default
};
