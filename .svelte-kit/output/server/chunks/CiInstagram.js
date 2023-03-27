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
  )}><path d="${"M18.437 20.937H5.563a2.5 2.5 0 0 1-2.5-2.5V5.563a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5v12.874a2.5 2.5 0 0 1-2.5 2.5ZM5.563 4.063a1.5 1.5 0 0 0-1.5 1.5v12.874a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5V5.563a1.5 1.5 0 0 0-1.5-1.5Z"}"></path><path d="${"M12 16.594A4.595 4.595 0 1 1 16.6 12a4.6 4.6 0 0 1-4.6 4.594ZM12 8.4a3.595 3.595 0 1 0 3.6 3.6A3.6 3.6 0 0 0 12 8.4Z"}"></path><circle cx="${"17.2"}" cy="${"6.83"}" r="${"1.075"}"></circle></svg>`;
});
export {
  Component as default
};
