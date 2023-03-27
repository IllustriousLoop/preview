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
  )}><g data-name="${"Square More"}"><path d="${"M18.437 20.938H5.562a2.5 2.5 0 0 1-2.5-2.5V5.565a2.5 2.5 0 0 1 2.5-2.5h12.875a2.5 2.5 0 0 1 2.5 2.5v12.873a2.5 2.5 0 0 1-2.5 2.5ZM5.562 4.065a1.5 1.5 0 0 0-1.5 1.5v12.873a1.5 1.5 0 0 0 1.5 1.5h12.875a1.5 1.5 0 0 0 1.5-1.5V5.565a1.5 1.5 0 0 0-1.5-1.5Z"}"></path><circle cx="${"11.999"}" cy="${"12.002"}" r="${"1"}"></circle><circle cx="${"15.999"}" cy="${"12.002"}" r="${"1"}"></circle><circle cx="${"7.999"}" cy="${"12.002"}" r="${"1"}"></circle></g></svg>`;
});
export {
  Component as default
};
