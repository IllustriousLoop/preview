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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02S15.48 8.71 14 7.97zM3 9v6h4l5 5V4L7 9H3z"}"></path></svg>`;
});
export {
  Component as default
};
