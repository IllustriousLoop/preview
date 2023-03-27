import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m117.938 50.5 2.53 99.906 105.313 58.97L117.938 50.5zm260.906 22.594-97.438 35.97L302.344 280l76.5-206.906zm115.22 78.75-133.91 59.936 67.563 119.75 5.655 10.064-11 3.47-82.063 25.78 57.438 49.25 23.75 20.375-31.03-4-254.22-32.814-35.406-4.562 33.094-13.375 127.187-51.345L173.5 295.03 19.75 363.907v130.656h474.313V151.844zm-357.783 50.47-96.53 22.655 246.844 72.343-150.313-95z"}"></path></svg>`;
});
export {
  Component as default
};
