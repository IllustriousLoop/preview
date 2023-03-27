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
  )}><path fill-rule="${"evenodd"}" d="${"M5.778 4.674a4 4 0 1 1 4.444 6.652 4 4 0 0 1-4.444-6.652zm.694 5.612a2.75 2.75 0 1 0 3.056-4.572 2.75 2.75 0 0 0-3.056 4.572zM9.5 6.5h-3v1h3v-1zm0 2h-3v1h3v-1z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
