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
  )}><path fill-rule="${"evenodd"}" d="${"M12.95 1.5a.45.45 0 0 0-.9 0v12a.45.45 0 1 0 .9 0v-12ZM6.568 3.932a.45.45 0 1 0-.636.636L8.414 7.05H.5a.45.45 0 0 0 0 .9h7.914l-2.482 2.482a.45.45 0 1 0 .636.636l3.25-3.25a.45.45 0 0 0 0-.636l-3.25-3.25Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
