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
  )}><path d="${"M16 7h-1.577A6.516 6.516 0 0 0 9 1.577V0H7v1.577A6.516 6.516 0 0 0 1.577 7H0v2h1.577A6.516 6.516 0 0 0 7 14.423V16h2v-1.577A6.516 6.516 0 0 0 14.423 9H16V7zm-3.612 0h-1.559A3.008 3.008 0 0 0 9 5.171V3.612A4.516 4.516 0 0 1 12.388 7zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 3.612v1.559A3.008 3.008 0 0 0 5.171 7H3.612A4.516 4.516 0 0 1 7 3.612zM3.612 9h1.559A3.008 3.008 0 0 0 7 10.829v1.559A4.516 4.516 0 0 1 3.612 9zM9 12.388v-1.559A3.008 3.008 0 0 0 10.829 9h1.559A4.516 4.516 0 0 1 9 12.388z"}"></path></svg>`;
});
export {
  Component as default
};
