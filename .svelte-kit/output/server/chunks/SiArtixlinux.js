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
  )}><path d="${"M12 0 7.873 8.462l11.358 6.363zM6.626 11.018.295 24l18.788-7.762zm13.846 6.352-5.926 3.402L23.706 24Z"}"></path></svg>`;
});
export {
  Component as default
};
