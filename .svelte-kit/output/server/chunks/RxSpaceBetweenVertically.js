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
  )}><path fill-rule="${"evenodd"}" d="${"M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H9v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1H1.5A.5.5 0 0 1 1 .5ZM7 9a1 1 0 0 0-1 1v4H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H9v-4a1 1 0 0 0-1-1H7Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
