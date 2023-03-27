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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512A5.986 5.986 0 0 1 18 17a5.985 5.985 0 0 1-4.329-1.845l3.094-8.512L13 5.387V19h4v2H7v-2h4V5.387L7.232 6.643l3.096 8.512A5.982 5.982 0 0 1 6 17a5.985 5.985 0 0 1-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2h2zm5 7.103L16.582 13h2.835L18 9.103zm-12 0L4.582 13h2.835L6 9.103z"}"></path></svg>`;
});
export {
  Component as default
};
