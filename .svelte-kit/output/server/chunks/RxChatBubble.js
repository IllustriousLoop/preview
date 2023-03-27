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
  )}><path fill-rule="${"evenodd"}" d="${"M12.5 3h-10A1.5 1.5 0 0 0 1 4.5v5A1.5 1.5 0 0 0 2.5 11h5a.5.5 0 0 1 .354.146L10 13.293V11.5a.5.5 0 0 1 .5-.5h2A1.5 1.5 0 0 0 14 9.5v-5A1.5 1.5 0 0 0 12.5 3Zm-10-1h10A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H11v2.5a.5.5 0 0 1-.854.354L7.293 12H2.5A2.5 2.5 0 0 1 0 9.5v-5A2.5 2.5 0 0 1 2.5 2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
