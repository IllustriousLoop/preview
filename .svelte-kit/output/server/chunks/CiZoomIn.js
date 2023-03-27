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
  )}><g data-name="${"Zoom In"}"><path d="${"M20.74 20.088c-1.19-1.2-2.389-2.39-3.579-3.58l-.171-.17a8.039 8.039 0 1 0-.719.7c1.1 1.09 2.17 2.16 3.25 3.25l.51.51c.459.45 1.169-.26.709-.71Zm-9.669-2.11a6.96 6.96 0 1 1 6.96-6.96 6.972 6.972 0 0 1-6.96 6.96Z"}"></path><path d="${"M13.071 11.518h-1.5v1.5a.5.5 0 0 1-1 0v-1.5h-1.5a.5.5 0 0 1 0-1h1.5v-1.5a.5.5 0 0 1 1 0v1.5h1.5a.5.5 0 0 1 0 1Z"}"></path></g></svg>`;
});
export {
  Component as default
};
