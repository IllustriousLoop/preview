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
  )}><path d="${"M8.812 17.176c-2.968 0-4.956-2.308-4.956-5.176 0-2.705 1.776-5.176 4.91-5.176 2.407 0 3.856 1.445 4.207 3.357h3.95C16.479 6.427 13.51 3.42 8.718 3.42 3.131 3.42 0 7.523 0 12c0 4.57 3.295 8.58 8.766 8.58 4.58 0 7.549-2.822 8.18-6.272h-4.02c-.467 1.609-1.916 2.868-4.114 2.868zM24 12.068l-3.466 8.055-2.38-1.022 2.992-7.055-3.01-7.096 2.433-1.042Z"}"></path></svg>`;
});
export {
  Component as default
};
