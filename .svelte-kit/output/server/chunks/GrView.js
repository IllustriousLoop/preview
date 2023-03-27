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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 21c-5 0-11-5-11-9s6-9 11-9 11 5 11 9-6 9-11 9Zm0-14a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"}"></path></svg>`;
});
export {
  Component as default
};
