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
  )}><g data-name="${"Zoom Out"}"><path d="${"m20.74 20.088-3.75-3.75a8.039 8.039 0 1 0-.719.7c1.1 1.09 2.17 2.16 3.25 3.25l.51.51a.5.5 0 0 0 .709-.71Zm-16.63-9.07a6.961 6.961 0 1 1 6.961 6.96 6.972 6.972 0 0 1-6.961-6.96Z"}"></path><path d="${"M13.073 10.521h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1Z"}"></path></g></svg>`;
});
export {
  Component as default
};
