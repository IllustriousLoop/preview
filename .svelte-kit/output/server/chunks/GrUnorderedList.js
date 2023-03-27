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
  )}><path d="${"M5.94 6.42H24v1.75H5.94zm0 5.29H24v1.75H5.94zm0 5.28H24v1.75H5.94z"}"></path><circle cx="${"1.85"}" cy="${"7.29"}" r="${"1.52"}"></circle><circle cx="${"1.85"}" cy="${"12.58"}" r="${"1.52"}"></circle><circle cx="${"1.85"}" cy="${"17.87"}" r="${"1.52"}"></circle></svg>`;
});
export {
  Component as default
};
