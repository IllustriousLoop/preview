import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M15.996 11.352 16 16l-4.649-.004.001-1 2.94.003L8.5 9.208 2.708 15l2.94-.003.001 1L1 16l.004-4.649 1 .001-.003 2.939L7.793 8.5 2.001 2.708l.003 2.939-1 .001L1 1l4.649.004-.001 1-2.94-.003L8.5 7.793l5.792-5.792-2.94.003-.001-1L16 1l-.004 4.649-1-.001.003-2.939L9.207 8.5l5.792 5.792-.003-2.939 1-.001z"}"></path></svg>`;
});
export {
  Component as default
};
