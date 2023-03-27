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
  )}><path fill="${"#3F51B5"}" d="${"m17.8 18.1-7.4 7.3-4.2-4.1L4 23.5l6.4 6.4 9.6-9.6zm0-13-7.4 7.3-4.2-4.1L4 10.5l6.4 6.4L20 7.3zm0 26-7.4 7.3-4.2-4.1L4 36.5l6.4 6.4 9.6-9.6z"}"></path><path fill="${"#90CAF9"}" d="${"M24 22h20v4H24zm0-13h20v4H24zm0 26h20v4H24z"}"></path></svg>`;
});
export {
  Component as default
};
