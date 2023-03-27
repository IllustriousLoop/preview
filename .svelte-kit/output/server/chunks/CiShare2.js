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
  )}><path d="${"M18.44 15.94a2.5 2.5 0 0 0-1.96.95l-8.51-4.25a2.356 2.356 0 0 0 0-1.29l8.5-4.25a2.5 2.5 0 1 0-.53-1.54 2.269 2.269 0 0 0 .09.65l-8.5 4.25a2.5 2.5 0 1 0 0 3.08l8.5 4.25a2.269 2.269 0 0 0-.09.65 2.5 2.5 0 1 0 2.5-2.5Zm0-11.88a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5ZM5.56 13.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm12.88 6.44a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Z"}" data-name="${"Share 2"}"></path></svg>`;
});
export {
  Component as default
};
