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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11.189 13.157 12.57 21H4a1 1 0 0 1-1-1v-5.398l8.189-1.445zM20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5.398L11.428 3H20zM9.397 3l1.444 8.188L3 12.57V4a1 1 0 0 1 1-1h5.397z"}"></path></svg>`;
});
export {
  Component as default
};
