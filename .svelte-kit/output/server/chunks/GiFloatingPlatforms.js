import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M184 43.5v18h144l-.1-18zm24 95.9-144 .1v18l144-.1zm96.1 0v18l143.9.1v-18.1zm168.4 98.1-435.63.1L128 372.5l10.9-32 21.1 80 32-52.5 48 128 80-107.5 32 16z"}"></path></svg>`;
});
export {
  Component as default
};
