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
  )}><path fill-rule="${"evenodd"}" d="${"M2 5h11a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM0 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6Zm4.5.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm2.25.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm3.75-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
