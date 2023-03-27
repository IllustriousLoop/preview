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
  )}><path fill-rule="${"evenodd"}" d="${"M22.775 8A9 9 0 0 1 23 10h-9V1a9 9 0 0 1 8.775 7Zm-2.067 0A6.999 6.999 0 0 0 16 3.292V8h4.708Z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M1 14a9 9 0 0 1 11-8.775V12h6.775A9 9 0 1 1 1 14Zm15.803 0H10V7.196A6.804 6.804 0 1 0 16.803 14Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
