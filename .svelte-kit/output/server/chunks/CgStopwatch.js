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
  )}><path d="${"m18.621 2.55 2.829 2.83-1.414 1.414-2.829-2.828 1.414-1.415ZM12.822 8.6h-2v4h2v-4Z"}"></path><path fill-rule="${"evenodd"}" d="${"M5.186 18.814A9 9 0 1 0 17.914 6.086 9 9 0 0 0 5.186 18.814Zm1.415-1.415A7 7 0 1 0 16.5 7.5a7 7 0 0 0-9.9 9.9Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
