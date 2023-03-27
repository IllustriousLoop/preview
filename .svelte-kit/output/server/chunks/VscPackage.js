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
  )}><path fill-rule="${"evenodd"}" d="${"m8.61 3 5.74 1.53L15 5v6.74l-.37.48-6.13 1.69-6.14-1.69-.36-.48V5l.61-.47L8.34 3h.27zm-.09 1-4 1 .55.2 3.43.9 3-.81.95-.29-3.93-1zM3 11.36l5 1.37V7L3 5.66v5.7zM9 7v5.73l5-1.37V5.63l-2.02.553V8.75l-1 .26V6.457L9 7z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
