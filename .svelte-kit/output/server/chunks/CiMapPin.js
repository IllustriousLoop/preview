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
  )}><path d="${"M12 2.06a5.5 5.5 0 0 0-.5 10.97v8.41a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5v-8.41A5.5 5.5 0 0 0 12 2.06Zm0 10a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5Z"}" data-name="${"Map Pin"}"></path></svg>`;
});
export {
  Component as default
};
