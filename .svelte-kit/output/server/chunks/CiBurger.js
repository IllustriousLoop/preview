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
  )}><path d="${"M19.325 11.015a7.344 7.344 0 0 0-14.66 0 2.014 2.014 0 0 0-1.6 1.96v.16a2.016 2.016 0 0 0 1.64 1.97l.27 2.45a2.593 2.593 0 0 0 2.59 2.32h8.87a2.593 2.593 0 0 0 2.59-2.32l.27-2.45a2.016 2.016 0 0 0 1.64-1.97v-.16a2 2 0 0 0-1.61-1.96ZM12 5.125a6.365 6.365 0 0 1 6.34 5.85H5.665A6.362 6.362 0 0 1 12 5.125Zm6.04 12.32a1.6 1.6 0 0 1-1.6 1.43H7.565a1.6 1.6 0 0 1-1.6-1.43l-.26-2.31H18.3Zm1.9-4.31a1 1 0 0 1-1 1H5.065a1 1 0 0 1-1-1v-.16a1 1 0 0 1 1-1h13.87a1 1 0 0 1 1 1Z"}"></path><circle cx="${"12"}" cy="${"6.622"}" r="${".5"}"></circle><circle cx="${"8.323"}" cy="${"8.323"}" r="${".5"}"></circle><circle cx="${"15.676"}" cy="${"8.323"}" r="${".5"}"></circle></svg>`;
});
export {
  Component as default
};
