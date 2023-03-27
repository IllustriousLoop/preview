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
  )}><g data-name="${"Face Frown"}"><path d="${"M12 21.942A9.942 9.942 0 1 1 21.942 12 9.953 9.953 0 0 1 12 21.942Zm0-18.884A8.942 8.942 0 1 0 20.942 12 8.952 8.952 0 0 0 12 3.058Z"}"></path><path d="${"M17.206 16.481a6.033 6.033 0 0 0-10.412 0 .5.5 0 0 0 .863.5 5.033 5.033 0 0 1 8.685 0 .5.5 0 0 0 .864-.5Z"}"></path><circle cx="${"9"}" cy="${"9.011"}" r="${"1.25"}"></circle><circle cx="${"15"}" cy="${"9.011"}" r="${"1.25"}"></circle></g></svg>`;
});
export {
  Component as default
};
