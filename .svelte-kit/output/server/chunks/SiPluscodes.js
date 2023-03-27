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
  )}><path d="${"M12 0a2.4 2.4 0 0 0-2.4 2.4A2.4 2.4 0 0 0 12 4.8a2.4 2.4 0 0 0 2.4-2.4A2.4 2.4 0 0 0 12 0zM9.543 9.543v4.914h4.914V9.543zM2.4 9.6A2.4 2.4 0 0 0 0 12a2.4 2.4 0 0 0 2.4 2.4A2.4 2.4 0 0 0 4.8 12a2.4 2.4 0 0 0-2.4-2.4zm19.2 0a2.4 2.4 0 0 0-2.4 2.4 2.4 2.4 0 0 0 2.4 2.4A2.4 2.4 0 0 0 24 12a2.4 2.4 0 0 0-2.4-2.4zM12 19.2a2.4 2.4 0 0 0-2.4 2.4A2.4 2.4 0 0 0 12 24a2.4 2.4 0 0 0 2.4-2.4 2.4 2.4 0 0 0-2.4-2.4z"}"></path></svg>`;
});
export {
  Component as default
};
