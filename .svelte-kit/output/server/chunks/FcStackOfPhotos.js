import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#64B5F6"}" d="${"m17.474 8.578 26.544 8.904-8.904 26.544L8.57 35.122z"}"></path><path fill="${"#1E88E5"}" d="${"m19.238 12.504 20.922 6.82-6.2 19.02-20.922-6.82z"}"></path><path fill="${"#90CAF9"}" d="${"m10.881 5.778 27.524 5.068-5.068 27.524-27.524-5.068z"}"></path><path fill="${"#42A5F5"}" d="${"m13.219 9.444 21.67 3.85-3.5 19.7-21.67-3.85z"}"></path><path fill="${"#BBDEFB"}" d="${"M4 4h28v28H4z"}"></path><path fill="${"#4CAF50"}" d="${"M7 7h22v20H7z"}"></path><path fill="${"#fff"}" d="${"M16 13c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4-2-2.9-2-4zm4 8c0 1.1-.9 2-2 2s-2-.9-2-2 2-4 2-4 2 2.9 2 4z"}"></path><path fill="${"#fff"}" d="${"M13.5 16.7c-1-.6-1.3-1.8-.7-2.7.6-1 1.8-1.3 2.7-.7 1 .6 2.5 3.7 2.5 3.7s-3.5.3-4.5-.3zm9 .6c1 .6 1.3 1.8.7 2.7-.6 1-1.8 1.3-2.7.7-1-.5-2.5-3.7-2.5-3.7s3.5-.3 4.5.3z"}"></path><path fill="${"#fff"}" d="${"M22.5 16.7c1-.6 1.3-1.8.7-2.7-.6-1-1.8-1.3-2.7-.7-1 .5-2.5 3.7-2.5 3.7s3.5.3 4.5-.3zm-9 .6c-1 .6-1.3 1.8-.7 2.7.6 1 1.8 1.3 2.7.7 1-.6 2.5-3.7 2.5-3.7s-3.5-.3-4.5.3z"}"></path><circle cx="${"18"}" cy="${"17"}" r="${"2"}" fill="${"#FFC107"}"></circle></svg>`;
});
export {
  Component as default
};
