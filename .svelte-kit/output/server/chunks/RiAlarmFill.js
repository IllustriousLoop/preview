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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 22a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm1-9V8h-2v7h5v-2h-3zM1.747 6.282l3.535-3.535 1.415 1.414L3.16 7.697 1.747 6.282zm16.97-3.535 3.536 3.535-1.414 1.415-3.536-3.536 1.415-1.414z"}"></path></svg>`;
});
export {
  Component as default
};
