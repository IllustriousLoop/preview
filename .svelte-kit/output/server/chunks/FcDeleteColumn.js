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
  )}><path fill="${"#90CAF9"}" d="${"M30 5H18c-2.2 0-4 1.8-4 4v30c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V9c0-2.2-1.8-4-4-4zM18 39V9h12v30H18z"}"></path><circle cx="${"38"}" cy="${"38"}" r="${"10"}" fill="${"#F44336"}"></circle><g fill="${"#fff"}"><path d="${"m43.31 41.181-2.12 2.121-8.484-8.483 2.12-2.121z"}"></path><path d="${"m34.819 43.31-2.121-2.12 8.483-8.484 2.121 2.12z"}"></path></g></svg>`;
});
export {
  Component as default
};
