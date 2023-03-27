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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"m18 7.524-7.857 6.286L18 7.524Zm0 8.38L10.143 9.62 18 15.905Zm-9.429-5.761a1.571 1.571 0 1 0 0-3.143 1.571 1.571 0 0 0 0 3.143Zm0 6.286a1.571 1.571 0 1 0 0-3.143 1.571 1.571 0 0 0 0 3.143Z"}"></path></svg>`;
});
export {
  Component as default
};
