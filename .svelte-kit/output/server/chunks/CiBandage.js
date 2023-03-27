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
  )}><path d="${"M17.435 7.5H6.565a4.5 4.5 0 0 0 0 9h10.87a4.5 4.5 0 0 0 0-9Zm-9.93 8h-.94a3.5 3.5 0 0 1 0-7h.94Zm8 0h-7v-7h7Zm1.93 0h-.93v-7h.93a3.5 3.5 0 0 1 0 7Z"}"></path><circle cx="${"10.252"}" cy="${"10.501"}" r="${".625"}"></circle><circle cx="${"10.252"}" cy="${"13.501"}" r="${".625"}"></circle><circle cx="${"13.752"}" cy="${"10.5"}" r="${".625"}"></circle><circle cx="${"13.752"}" cy="${"13.5"}" r="${".625"}"></circle></svg>`;
});
export {
  Component as default
};
