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
  )}><path d="${"M6.844 10 3.96 15h9.072l2.884-5zm8.662-1-4.619-8H5.112l4.619 8zM4.534 2 0 9.856l2.888 5L7.422 7z"}"></path></svg>`;
});
export {
  Component as default
};
