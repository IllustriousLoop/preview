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
  )}><path fill-rule="${"evenodd"}" d="${"M5.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3 5c.017 0 .033 0 .05-.002a2.5 2.5 0 0 0 4.9 0A.507.507 0 0 0 8 5h5.5a.5.5 0 0 0 0-1H8c-.017 0-.033 0-.05.002a2.5 2.5 0 0 0-4.9 0A.507.507 0 0 0 3 4H1.5a.5.5 0 0 0 0 1H3Zm8.95 5.998a2.5 2.5 0 0 1-4.9 0A.507.507 0 0 1 7 11H1.5a.5.5 0 0 1 0-1H7c.017 0 .033 0 .05.002a2.5 2.5 0 0 1 4.9 0A.506.506 0 0 1 12 10h1.5a.5.5 0 0 1 0 1H12c-.017 0-.033 0-.05-.002ZM8 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
