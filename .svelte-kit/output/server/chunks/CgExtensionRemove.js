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
  )}><path fill-rule="${"evenodd"}" d="${"M12 11V5H4v14h14v-8h-6ZM6 7h4v4H6V7Zm4 6v4H6v-4h4Zm6 0v4h-4v-4h4Z"}" clip-rule="${"evenodd"}"></path><path d="${"M20 7h-6v2h6V7Z"}"></path></svg>`;
});
export {
  Component as default
};
