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
  )}><g data-name="${"View Board"}"><path d="${"M18.437 20.936H5.563a2.5 2.5 0 0 1-2.5-2.5V5.562a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5v12.874a2.5 2.5 0 0 1-2.5 2.5ZM5.563 4.062a1.5 1.5 0 0 0-1.5 1.5v12.874a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5V5.562a1.5 1.5 0 0 0-1.5-1.5Z"}"></path><path d="${"M12.5 14.544a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 1 0Zm4.217-2.091a.5.5 0 0 1-1 0V6.544a.5.5 0 0 1 1 0ZM8.28 6.544a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0Z"}"></path></g></svg>`;
});
export {
  Component as default
};
