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
  )}><path d="${"m.5 9.344 4.707 3.07L8.5 9.668l-4.745-2.93zm4.707-8.282L.5 4.133l3.255 2.605L8.5 3.811zM16.5 4.133l-4.706-3.071L8.5 3.811l4.746 2.927zm-8 5.535 3.294 2.746 4.706-3.07-3.254-2.606z"}"></path><path d="${"m8.51 10.259-3.303 2.739-1.413-.924v1.035l4.716 2.829 4.717-2.829v-1.035l-1.414.924z"}"></path></svg>`;
});
export {
  Component as default
};
