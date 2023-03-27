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
  )}><path d="${"M10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M12.024 2H12C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-5.258-4.058-9.568-9.212-9.97v-.002A9.94 9.94 0 0 0 12.025 2ZM12 20a8 8 0 0 0 7.742-10.022 10.016 10.016 0 0 1-8.982-4.376 7.976 7.976 0 0 1-5.691 2.4A8 8 0 0 0 12 20Zm-.021-16h.045-.045Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
