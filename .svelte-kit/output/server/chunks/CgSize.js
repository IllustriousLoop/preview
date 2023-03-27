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
  )}><path fill-rule="${"evenodd"}" d="${"M12 6V4h8v16h-8v-2H8v-2H4V8h4V6h4Zm2 0h4v12h-4V6Zm-2 2h-2v8h2V8Zm-4 2v4H6v-4h2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
