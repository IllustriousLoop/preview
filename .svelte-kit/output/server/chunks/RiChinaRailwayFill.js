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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11 19v-6l-2-1V9h6v3l-2 1v6l5 1v2H6v-2l5-1zM10 2.223V1h4v1.223a9.003 9.003 0 0 1 2.993 16.266l-1.11-1.664a7 7 0 1 0-7.767 0l-1.109 1.664A9.003 9.003 0 0 1 10 2.223z"}"></path></svg>`;
});
export {
  Component as default
};
