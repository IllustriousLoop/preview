import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M9.974 21h8.052a.975.975 0 0 0 .81-1.517l-4.025-6.048a.973.973 0 0 0-1.622 0l-4.025 6.048A.977.977 0 0 0 9.974 21z"}"></path><path d="${"M4.98 16h14.04c.542 0 .98-.443.98-.989a.995.995 0 0 0-.156-.534l-7.02-11.023a.974.974 0 0 0-1.648 0l-7.02 11.023a.994.994 0 0 0 .294 1.366.973.973 0 0 0 .53.157z"}"></path></svg>`;
});
export {
  Component as default
};
