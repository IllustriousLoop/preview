import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 448 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M368 160h-.94a144 144 0 1 0-286.12 0H80a48 48 0 0 0 0 96h288a48 48 0 0 0 0-96zM195.38 493.69a31.52 31.52 0 0 0 57.24 0L352 288H96z"}"></path></svg>`;
});
export {
  Component as default
};
