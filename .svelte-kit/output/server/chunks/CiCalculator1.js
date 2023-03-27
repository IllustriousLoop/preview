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
  )}><g data-name="${"Calculator 1"}"><path d="${"M16.5 21.937h-9a2.5 2.5 0 0 1-2.5-2.5V4.563a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v14.874a2.5 2.5 0 0 1-2.5 2.5Zm-9-18.874a1.5 1.5 0 0 0-1.5 1.5v14.874a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V4.563a1.5 1.5 0 0 0-1.5-1.5Z"}"></path><path d="${"M14.5 9.757h-5a1.5 1.5 0 0 1-1.5-1.5V6.563a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v1.694a1.5 1.5 0 0 1-1.5 1.5Zm-5-3.694a.5.5 0 0 0-.5.5v1.694a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V6.563a.5.5 0 0 0-.5-.5Z"}"></path><circle cx="${"12"}" cy="${"11.508"}" r="${".75"}"></circle><circle cx="${"15.25"}" cy="${"11.508"}" r="${".75"}"></circle><circle cx="${"8.75"}" cy="${"11.508"}" r="${".75"}"></circle><circle cx="${"12"}" cy="${"14.848"}" r="${".75"}"></circle><circle cx="${"15.25"}" cy="${"14.848"}" r="${".75"}"></circle><circle cx="${"8.75"}" cy="${"14.848"}" r="${".75"}"></circle><circle cx="${"15.25"}" cy="${"18.187"}" r="${".75"}"></circle><path d="${"M12.248 18.687H8.5a.5.5 0 0 1 0-1h3.744a.5.5 0 1 1 0 1Z"}"></path></g></svg>`;
});
export {
  Component as default
};
