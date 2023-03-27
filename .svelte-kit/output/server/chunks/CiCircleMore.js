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
  )}><g data-name="${"Circle More"}"><circle cx="${"12.001"}" cy="${"12"}" r="${"1"}"></circle><circle cx="${"16.001"}" cy="${"12"}" r="${"1"}"></circle><circle cx="${"8.001"}" cy="${"12"}" r="${"1"}"></circle><path d="${"M12 21.932A9.934 9.934 0 1 1 21.934 12 9.944 9.944 0 0 1 12 21.932Zm0-18.867A8.934 8.934 0 1 0 20.934 12 8.944 8.944 0 0 0 12 3.065Z"}"></path></g></svg>`;
});
export {
  Component as default
};
