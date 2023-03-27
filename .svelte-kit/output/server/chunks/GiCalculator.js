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
  )}><path d="${"M95 25v462h322V25H95zm193 18h80v18h-80V43zM114 83h284v84H114V83zm22 46v18h88v-18h-88zm-22 54h58v58h-58v-58zm76 0h58v58h-58v-58zm74 0h58v58h-58v-58zm76 0h58v58h-58v-58zm-208 18v22h22v-22h-22zm76 0v22h22v-22h-22zm74 0v22h22v-22h-22zm76 0v22h22v-22h-22zm-244 56h58v58h-58v-58zm76 0h58v58h-58v-58zm74 0h58v58h-58v-58zm76 0h58v58h-58v-58zm-208 18v22h22v-22h-22zm76 0v22h22v-22h-22zm74 0v22h22v-22h-22zm76 0v22h22v-22h-22zm-244 56h58v58h-58v-58zm76 0h58v58h-58v-58zm74 0h58v58h-58v-58zm76 0h58v132h-58V331zm-208 18v22h22v-22h-22zm76 0v22h22v-22h-22zm74 0v22h22v-22h-22zm76 0v96h22v-96h-22zm-244 56h58v58h-58v-58zm76 0h58v58h-58v-58zm74 0h58v58h-58v-58zm-132 18v22h22v-22h-22zm76 0v22h22v-22h-22zm74 0v22h22v-22h-22z"}"></path></svg>`;
});
export {
  Component as default
};
