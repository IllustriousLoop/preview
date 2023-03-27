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
  )}><g data-name="${"Passport 1"}"><path d="${"M16.5 21.936h-9a2.5 2.5 0 0 1-2.5-2.5V4.564a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v14.872a2.5 2.5 0 0 1-2.5 2.5Zm-9-18.872a1.5 1.5 0 0 0-1.5 1.5v14.872a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V4.564a1.5 1.5 0 0 0-1.5-1.5Z"}"></path><path d="${"M12 12.563a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Zm0-6a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5Zm3 11.875H9a.5.5 0 0 1 0-1h6a.5.5 0 1 1 0 1Z"}"></path></g></svg>`;
});
export {
  Component as default
};
