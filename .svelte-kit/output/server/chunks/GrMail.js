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
  )}><path fill="${"#01A982"}" fill-rule="${"evenodd"}" d="${"M23 20V6l-11 9L1 6v14h22Zm-11-8 10-8H2l10 8Z"}"></path></svg>`;
});
export {
  Component as default
};
