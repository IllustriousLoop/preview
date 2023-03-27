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
  )}><path d="${"M10.976 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.995 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M19 21V10a7 7 0 1 0-14 0v11h2.828l1.415-1.414L10.657 21h2.686l1.414-1.414L16.172 21H19Zm-2-11a5 5 0 0 0-10 0v9l2.243-2.243L12 19.515l2.757-2.758L17 19v-9Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
