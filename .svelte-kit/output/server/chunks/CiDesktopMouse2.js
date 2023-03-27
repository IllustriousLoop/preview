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
  )}><g data-name="${"Desktop Mouse 2"}"><path d="${"M13.437 21.938h-2.874a6.508 6.508 0 0 1-6.5-6.5V8.562a6.508 6.508 0 0 1 6.5-6.5h2.874a6.508 6.508 0 0 1 6.5 6.5v6.876a6.508 6.508 0 0 1-6.5 6.5ZM10.563 3.062a5.506 5.506 0 0 0-5.5 5.5v6.876a5.506 5.506 0 0 0 5.5 5.5h2.874a5.506 5.506 0 0 0 5.5-5.5V8.562a5.506 5.506 0 0 0-5.5-5.5Z"}"></path><path d="${"M11.5 6.541v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0Z"}"></path></g></svg>`;
});
export {
  Component as default
};
