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
  )}><path d="${"M12.05 5a8.97 8.97 0 0 1 6.314 2.586l-4.243 4.243A2.99 2.99 0 0 0 12.05 11c-.855 0-1.625.357-2.172.93L5.636 7.687A8.973 8.973 0 0 1 12.05 5Zm0 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}"></path></svg>`;
});
export {
  Component as default
};
