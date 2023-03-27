import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M12 10.375a4.375 4.375 0 0 0-8.75 0c0 1.127.159 2.784 1.75 4.375L12 20s5.409-3.659 7-5.25 1.75-3.248 1.75-4.375a4.375 4.375 0 0 0-8.75 0"}"></path></svg>`;
});
export {
  Component as default
};
