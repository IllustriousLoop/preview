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
  )}><path d="${"M415.9 143.7c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3L413 95.6c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l25.5 25.5zm-331.1 0c3.1 3.1 8.2 3.1 11.3 0l25.5-25.5c3.1-3.1 3.1-8.2 0-11.3l-11.3-11.3c-3.1-3.1-8.2-3.1-11.3 0L73.5 121c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.4z"}"></path><path d="${"M280 81.5V64c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v17.5C137.3 93.3 64 174.1 64 272c0 106 86 192 192 192s192-86 192-192c0-97.9-73.3-178.7-168-190.5zm-10 219.3V320c0 7.7-6.3 14-14 14s-14-6.3-14-14v-19.2c-10.7-5.2-18-16.1-18-28.8s7.3-23.6 18-28.8V144c0-7.7 6.3-14 14-14s14 6.3 14 14v99.2c10.7 5.2 18 16.1 18 28.8s-7.3 23.6-18 28.8z"}"></path></svg>`;
});
export {
  Component as default
};
