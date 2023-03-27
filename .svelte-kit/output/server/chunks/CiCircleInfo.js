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
  )}><g data-name="${"Circle Info"}"><path d="${"M11.5 15a.5.5 0 0 0 1 0v-4.019a.5.5 0 0 0-1 0Z"}"></path><circle cx="${"12"}" cy="${"8.999"}" r="${".5"}"></circle><path d="${"M12 2.065A9.934 9.934 0 1 1 2.066 12 9.945 9.945 0 0 1 12 2.065Zm0 18.867A8.934 8.934 0 1 0 3.066 12 8.944 8.944 0 0 0 12 20.932Z"}"></path></g></svg>`;
});
export {
  Component as default
};
