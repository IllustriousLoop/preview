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
  )}><path d="${"M12 9.999 9.143 7.142 16 1.999l-2-2-8.571 3.429L2.731.729C1.953-.049.867-.235.317.315s-.364 1.636.414 2.414l2.698 2.698L0 13.999l2 2 5.144-6.857 2.857 2.857v4h2l1-3 3-1v-2h-4z"}"></path></svg>`;
});
export {
  Component as default
};
