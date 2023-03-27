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
  )}><path d="${"M12.48 3.43a9.09 9.09 0 0 1 5.82 2.12v-3.2h1.64v6.5h-6.5V7.21h4.26a7.46 7.46 0 1 0 1.47 8.65l1.46.73a9.11 9.11 0 1 1-8.15-13.16Z"}"></path></svg>`;
});
export {
  Component as default
};
