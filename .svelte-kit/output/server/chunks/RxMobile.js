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
  )}><path fill-rule="${"evenodd"}" d="${"M4 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-10ZM4.5 1A1.5 1.5 0 0 0 3 2.5v10A1.5 1.5 0 0 0 4.5 14h6a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 10.5 1h-6ZM6 11.65a.35.35 0 1 0 0 .7h3a.35.35 0 1 0 0-.7H6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
