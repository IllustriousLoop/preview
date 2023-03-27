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
  )}><path fill="${"#FF9800"}" d="${"M3 28h26v4H3zm0-12h26v4H3z"}"></path><path fill="${"#2196F3"}" d="${"M43 11H20v26h23c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2z"}"></path><path fill="${"#64B5F6"}" d="${"M20 9h-2v30h2c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2z"}"></path></svg>`;
});
export {
  Component as default
};
