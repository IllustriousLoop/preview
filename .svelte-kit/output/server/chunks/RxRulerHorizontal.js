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
  )}><path fill-rule="${"evenodd"}" d="${"M.5 4a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H.5Zm.5 6V5h1.075v2.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5h1.15v2.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5H14v5H1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
