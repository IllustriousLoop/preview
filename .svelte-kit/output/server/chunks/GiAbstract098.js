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
  )}><path d="${"M115 21v94H21v94h94v94H21v94h94v94h94v-94h94v94h94v-94h94v-94h-94v-94h94v-94h-94V21h-94v94h-94V21h-94zm141 148.931c47.548 0 86.069 38.521 86.069 86.069s-38.52 86.069-86.069 86.069-86.069-38.521-86.069-86.069 38.521-86.069 86.07-86.069zm0 29.963c-30.978 0-56.106 25.128-56.106 56.106s25.128 56.106 56.106 56.106 56.106-25.128 56.106-56.106-25.128-56.106-56.106-56.106z"}"></path></svg>`;
});
export {
  Component as default
};
