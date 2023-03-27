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
  )}><path d="${"M405.1 256c25.2-11.9 42.9-37.1 42.9-66.9 0-41-33.6-74.3-75-74.3-15.9 0-30.3 4.8-42.6 13.1l.6-5.6c0-41-33.6-74.3-75-74.3s-75 33.3-75 74.3l.6 5.6c-12-8.3-26.7-13.1-42.6-13.1-41.4 0-75 33.3-75 74.3 0 29.7 17.7 55 42.9 66.9C81.7 267.9 64 293.1 64 322.9c0 41 33.6 74.3 75 74.3 15.9 0 30.3-4.8 42.6-13.1l-.6 5.6c0 41 33.6 74.3 75 74.3s75-33.3 75-74.3l-.6-5.6c12 8.3 26.7 13.1 42.6 13.1 41.4 0 75-33.3 75-74.3 0-29.8-17.7-55-42.9-66.9zM256 330.3c-41.4 0-75-33.3-75-74.3s33.6-74.3 75-74.3 75 33.3 75 74.3-33.6 74.3-75 74.3z"}"></path></svg>`;
});
export {
  Component as default
};
