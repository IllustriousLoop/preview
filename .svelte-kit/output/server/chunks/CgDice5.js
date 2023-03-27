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
  )}><path d="${"M14.945 7.055a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 7.837a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-11.89 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-11.837a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"}"></path><path fill-rule="${"evenodd"}" d="${"M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4Zm3-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
