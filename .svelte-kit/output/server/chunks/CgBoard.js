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
  )}><path fill-rule="${"evenodd"}" d="${"M6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H6Zm8 2h-4v12h4V6Zm2 0v12h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2ZM6 18h2V6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
