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
  )}><g data-name="${"Circle Alert"}"><path d="${"M12.5 9a.5.5 0 0 0-1 0v4.02a.5.5 0 0 0 1 0Z"}"></path><circle cx="${"12"}" cy="${"15.001"}" r="${".5"}"></circle><path d="${"M12 21.935A9.933 9.933 0 1 1 21.934 12 9.945 9.945 0 0 1 12 21.935Zm0-18.866A8.933 8.933 0 1 0 20.934 12 8.944 8.944 0 0 0 12 3.069Z"}"></path></g></svg>`;
});
export {
  Component as default
};
