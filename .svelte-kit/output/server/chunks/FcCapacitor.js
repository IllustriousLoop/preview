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
  )}><path fill="${"#FF9800"}" d="${"M0 27h25v4H0zm0-10h25v4H0z"}"></path><path fill="${"#3F51B5"}" d="${"M46 35c1.1 0 2-.9 2-2V15c0-1.1-.9-2-2-2H27v22h19zM21 13c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h2V13h-2z"}"></path><path fill="${"#303F9F"}" d="${"M25 33c1.1 0 2 .9 2 2V13c0 1.1-.9 2-2 2s-2-.9-2-2v22c0-1.1.9-2 2-2z"}"></path></svg>`;
});
export {
  Component as default
};
