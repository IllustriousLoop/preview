import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M6.719 8.526 14 14.564V2.429L6.719 8.526zM13 12.436 8.281 8.522 13 4.571v7.865zM3 2h1v13H3V2z"}"></path></svg>`;
});
export {
  Component as default
};
