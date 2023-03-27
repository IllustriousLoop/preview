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
  )}><path fill-rule="${"evenodd"}" d="${"M8 1.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12ZM3.318 5.818a.45.45 0 1 0-.636-.636l-2 2a.45.45 0 0 0 0 .636l2 2a.45.45 0 1 0 .636-.636L2.086 7.95H5.5a.45.45 0 1 0 0-.9H2.086l1.232-1.232Zm9-.636a.45.45 0 1 0-.636.636l1.232 1.232H9.5a.45.45 0 0 0 0 .9h3.414l-1.232 1.232a.45.45 0 0 0 .636.636l2-2a.45.45 0 0 0 0-.636l-2-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
