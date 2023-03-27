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
  )}><path fill="${"#E8EAF6"}" d="${"M42 39H6V23L24 6l18 17z"}"></path><path fill="${"#C5CAE9"}" d="${"m39 21-5-5V9h5zM6 39h36v5H6z"}"></path><path fill="${"#B71C1C"}" d="${"M24 4.3 4 22.9l2 2.2L24 8.4l18 16.7 2-2.2z"}"></path><path fill="${"#D84315"}" d="${"M18 28h12v16H18z"}"></path><path fill="${"#01579B"}" d="${"M21 17h6v6h-6z"}"></path><path fill="${"#FF8A65"}" d="${"M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z"}"></path></svg>`;
});
export {
  Component as default
};
