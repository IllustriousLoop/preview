import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M4 2H3v12h1V2Zm3.29.593L6.5 3v10l.79.407 7-5v-.814l-7-5ZM13.14 8 7.5 12.028V3.972L13.14 8Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
