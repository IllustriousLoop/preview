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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"m13 2 9 4v11l-9 5V2Zm9 4-9 5 9-5ZM9 22V2v20Zm0-10L3 5l6 7Zm0 0H1h8Zm0 0-6 7 6-7Z"}"></path></svg>`;
});
export {
  Component as default
};
