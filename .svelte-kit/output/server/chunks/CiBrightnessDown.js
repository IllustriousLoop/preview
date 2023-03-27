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
  )}><g data-name="${"Brightness Down"}"><path d="${"M12 17.5a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5Zm0-10a4.5 4.5 0 1 0 4.5 4.5A4.505 4.505 0 0 0 12 7.5Z"}"></path><circle cx="${"12"}" cy="${"2.813"}" r="${".75"}"></circle><circle cx="${"12"}" cy="${"21.187"}" r="${".75"}"></circle><circle cx="${"21.187"}" cy="${"12"}" r="${".75"}"></circle><circle cx="${"2.813"}" cy="${"12"}" r="${".75"}"></circle><circle cx="${"18.496"}" cy="${"5.504"}" r="${".75"}"></circle><circle cx="${"5.504"}" cy="${"18.496"}" r="${".75"}"></circle><circle cx="${"18.496"}" cy="${"18.496"}" r="${".75"}"></circle><circle cx="${"5.504"}" cy="${"5.504"}" r="${".75"}"></circle></g></svg>`;
});
export {
  Component as default
};
