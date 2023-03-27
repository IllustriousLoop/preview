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
  )}><path d="${"M303 300.2V78.4c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v221.9c-29 16.5-48.9 47.8-48.9 83.7 0 53 43 96 96 96s96-43 96-96c0-36-20.1-67.3-49.1-83.8zM240 78.4c0-8 7.7-14.5 16-14.5s16 6.5 16 14.5V128h-32V78.4z"}"></path></svg>`;
});
export {
  Component as default
};
