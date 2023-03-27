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
  )}><path fill-rule="${"evenodd"}" d="${"M3.5 5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1.25a.5.5 0 0 1 0-1h1.25A1.5 1.5 0 0 1 13 5.5v6a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5v-6A1.5 1.5 0 0 1 3.5 4h1.25a.5.5 0 0 1 0 1H3.5ZM7 1.636 5.568 3.068a.45.45 0 0 1-.636-.636l2.25-2.25a.45.45 0 0 1 .636 0l2.25 2.25a.45.45 0 0 1-.636.636L8 1.636V8.5a.5.5 0 0 1-1 0V1.636Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
