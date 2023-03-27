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
  )}><path fill="${"#9CCC65"}" d="${"M32 15V7H16v8L6.2 40c-.6 1.5.5 3 2.1 3h31.5c1.6 0 2.6-1.6 2.1-3L32 15z"}"></path><path fill="${"#8BC34A"}" d="${"M32 9H16c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2z"}"></path><path fill="${"#2E7D32"}" d="${"M28 30c0 4.4-4 8-4 8s-4-3.6-4-8 4-8 4-8 4 3.6 4 8z"}"></path><path fill="${"#388E3C"}" d="${"M31.1 32.6c-2 4-7.1 5.4-7.1 5.4s-2-5 0-8.9 7.1-5.4 7.1-5.4 2 4.9 0 8.9z"}"></path><path fill="${"#43A047"}" d="${"M16.9 32.6c2 4 7.1 5.4 7.1 5.4s2-5 0-8.9-7.1-5.4-7.1-5.4-2 4.9 0 8.9z"}"></path></svg>`;
});
export {
  Component as default
};
