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
  )}><path fill-opacity="${".5"}" d="${"M12.552 8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm0 9a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"}"></path><path fill-opacity="${".8"}" d="${"M12.552 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Zm0 9a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z"}"></path><path d="${"M3.448 4.002a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5Zm0 8.996a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5Z"}"></path></svg>`;
});
export {
  Component as default
};
