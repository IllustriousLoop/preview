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
  )}><path fill="${"#00BCD4"}" d="${"M26.9 42H17v-9.9z"}"></path><path fill="${"#00BCD4"}" d="${"M30 6v20.2L19.8 36.4l2.8 2.8L34 27.8V6z"}"></path><path fill="${"#2196F3"}" d="${"M15.9 31H6v-9.9z"}"></path><path fill="${"#2196F3"}" d="${"M20.2 14 8.8 25.4l2.8 2.8L21.8 18H41v-4z"}"></path><path fill="${"#37474F"}" d="${"M3.563 6.396 6.39 3.568l37.966 37.966-2.828 2.828z"}"></path></svg>`;
});
export {
  Component as default
};
