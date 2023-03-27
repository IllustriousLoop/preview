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
  )}><path fill="${"#673AB7"}" d="${"M16.5 18 0 42h33z"}"></path><path fill="${"#9575CD"}" d="${"M33.6 24 19.2 42H48z"}"></path><path fill="${"#40C4FF"}" d="${"M42.9 6.3C43.6 7.4 44 8.6 44 10c0 3.9-3.1 7-7 7-.7 0-1.3-.1-1.9-.3 1.2 2 3.4 3.3 5.9 3.3 3.9 0 7-3.1 7-7 0-3.2-2.1-5.9-5.1-6.7z"}"></path></svg>`;
});
export {
  Component as default
};
