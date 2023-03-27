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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8-11v15m-8-5.027C6.194 19.324 8.86 21 12 21c3.14 0 5.807-1.676 8-5.027M16 10H8"}"></path></svg>`;
});
export {
  Component as default
};
