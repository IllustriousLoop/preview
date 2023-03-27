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
  )}><g fill="${"none"}" fill-rule="${"evenodd"}"><path fill="${"#000"}" fill-opacity="${".2"}" d="${"M12 16.667V2l2.5 7.5H22L16 14l3 8z"}"></path><path fill="${"#FFC95E"}" d="${"M12 16.667 5 22l3-8-6-4.5h7.5L12 2z"}"></path></g></svg>`;
});
export {
  Component as default
};
