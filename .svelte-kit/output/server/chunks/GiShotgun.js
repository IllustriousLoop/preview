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
  )}><path d="${"M160.72 16C136 16.11 136 17.875 136 46v300c0 30 0 30 30 30h180c30 0 30 0 30-30V46c0-30 0-30-30-30H166c-1.875 0-3.633-.007-5.28 0zM196 76h120v210H196V76zm-46.656 345A13.333 13.333 0 0 0 136 434.344v48.312A13.333 13.333 0 0 0 149.344 496h213.312A13.333 13.333 0 0 0 376 482.656v-48.312A13.333 13.333 0 0 0 362.656 421H149.344z"}"></path></svg>`;
});
export {
  Component as default
};
