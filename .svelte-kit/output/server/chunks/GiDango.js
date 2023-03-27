import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M474.2 37.8c-21.6-21.6-56.2-21.6-77.8 0-21.6 21.6-21.6 56.2 0 77.8 21.6 21.6 56.2 21.6 77.8 0 21.6-21.6 21.6-56.2 0-77.8zm-90.5 90.5a54.984 54.984 0 0 0-77.8 0c-21.6 21.6-21.6 56.2 0 77.8 21.6 21.6 56.2 21.6 77.8 0 21.5-21.6 21.5-56.2 0-77.8zm-90.5 90.5a54.984 54.984 0 0 0-77.8 0c-21.6 21.6-21.6 56.2 0 77.8 21.6 21.6 56.2 21.6 77.8 0 21.5-21.6 21.5-56.2 0-77.8zm-96.5 83.7L21.62 477.6l12.73 12.8L209.5 315.3c-2.5-1.9-4.7-3.8-6.8-6-2.2-2.1-4.1-4.3-6-6.8z"}"></path></svg>`;
});
export {
  Component as default
};
