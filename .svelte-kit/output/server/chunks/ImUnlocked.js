import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M12 1c1.654 0 3 1.346 3 3v3h-2V4c0-.551-.449-1-1-1h-2c-.551 0-1 .449-1 1v3h.25c.412 0 .75.338.75.75v7.5c0 .412-.338.75-.75.75H.75a.753.753 0 0 1-.75-.75v-7.5C0 7.338.338 7 .75 7H7V4c0-1.654 1.346-3 3-3h2z"}"></path></svg>`;
});
export {
  Component as default
};
