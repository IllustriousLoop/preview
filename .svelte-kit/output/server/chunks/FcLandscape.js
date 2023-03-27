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
  )}><g fill="${"#FF9800"}"><path d="${"m40.997 6.065 7 7-7 6.999-7-7z"}"></path><path d="${"M36 8h10v10H36z"}"></path></g><circle cx="${"41"}" cy="${"13"}" r="${"3"}" fill="${"#FFEB3B"}"></circle><path fill="${"#2E7D32"}" d="${"M16.5 18 0 42h33z"}"></path><path fill="${"#4CAF50"}" d="${"M33.6 24 19.2 42H48z"}"></path></svg>`;
});
export {
  Component as default
};
