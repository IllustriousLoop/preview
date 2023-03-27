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
  )}><path fill-rule="${"evenodd"}" d="${"M14.998 1.02h-6v6h2.001l.013 12.145-1.844-1.834-1.41 1.418 4.254 4.23 4.23-4.254-1.417-1.41-1.813 1.823-.013-12.118h1.999v-6Zm-4 2h2v2h-2v-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
