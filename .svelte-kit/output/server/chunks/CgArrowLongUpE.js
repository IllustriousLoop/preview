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
  )}><path fill-rule="${"evenodd"}" d="${"m12.032 1.013 4.21 4.275-1.424 1.403-1.804-1.83-.07 12.116 1.998.01-.028 6-6-.029.029-6 2 .01.071-12.145L9.161 6.65 7.758 5.224l4.274-4.21Zm-1.108 19.955 2 .01.01-2-2-.01-.01 2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
