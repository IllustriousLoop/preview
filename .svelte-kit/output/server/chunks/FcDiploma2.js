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
  )}><path fill="${"#FBE9E7"}" d="${"M9 4h30v40H9z"}"></path><path fill="${"#F4511E"}" d="${"M30 37h2.8l-5-5-2.8 2.8 5 5zm-12 0h-2.8l5-5 2.8 2.8-5 5z"}"></path><path fill="${"#FF8A65"}" d="${"M15 13h18v4H15zm0 7h18v2H15zm9 6c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"}"></path><path fill="${"#FF8A65"}" d="${"M8 3v42h32V3H8zm30 37c-1.7 0-3 1.3-3 3H13c0-1.7-1.3-3-3-3V8c1.7 0 3-1.3 3-3h22c0 1.7 1.3 3 3 3v32z"}"></path></svg>`;
});
export {
  Component as default
};
