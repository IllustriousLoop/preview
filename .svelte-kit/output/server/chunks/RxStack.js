import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M7.754 1.82a.5.5 0 0 0-.508 0l-5.5 3.25a.5.5 0 0 0 0 .86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 0 0 0-.86l-5.5-3.25ZM7.5 8.17 2.983 5.5 7.5 2.83l4.517 2.67L7.5 8.17Zm-5.246.15a.5.5 0 0 0-.508.86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 1 0-.508-.86L7.5 11.42l-5.246-3.1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
