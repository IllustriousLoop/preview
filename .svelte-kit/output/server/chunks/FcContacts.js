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
  )}><path fill="${"#FF7043"}" d="${"M38 44H12V4h26c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#BF360C"}" d="${"M10 4h2v40h-2c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4z"}"></path><g fill="${"#AB300B"}"><circle cx="${"26"}" cy="${"20"}" r="${"4"}"></circle><path d="${"M33 30s-1.9-4-7-4-7 4-7 4v2h14v-2z"}"></path></g></svg>`;
});
export {
  Component as default
};
