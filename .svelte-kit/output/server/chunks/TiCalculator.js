import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M17 21H9c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM9 5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H9z"}"></path><circle cx="${"10"}" cy="${"11"}" r="${"1"}"></circle><circle cx="${"13"}" cy="${"11"}" r="${"1"}"></circle><circle cx="${"16"}" cy="${"11"}" r="${"1"}"></circle><circle cx="${"10"}" cy="${"14"}" r="${"1"}"></circle><circle cx="${"13"}" cy="${"14"}" r="${"1"}"></circle><circle cx="${"16"}" cy="${"14"}" r="${"1"}"></circle><circle cx="${"10"}" cy="${"17"}" r="${"1"}"></circle><circle cx="${"13"}" cy="${"17"}" r="${"1"}"></circle><circle cx="${"16"}" cy="${"17"}" r="${"1"}"></circle><path d="${"M16 7v1h-6V7h6m1-1H9v3h8V6z"}"></path></svg>`;
});
export {
  Component as default
};
